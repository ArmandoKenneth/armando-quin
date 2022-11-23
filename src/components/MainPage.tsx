import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


import CustomMap from './Map/CustomMap';
import Filters from './Filters/Filter';

interface ILaunchResponse {
  pad: { latitude: number; longitude: number; name: string; }
  id: string;
  name: string;
  window_start: Date;
  window_end: Date;
}


const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const today = new Date()
const dt = new Date()
const future = new Date(dt.setMonth(today.getMonth() + 3))


const MainPage: FC = () => {
  const [launches, setLaunches] = useState([])
  const [startDate, setStartDate] = useState(today)
  const [endDate, setEndDate] = useState(future)
  const [selectedLaunch, setSelectedLaunch] = useState(null)

  async function fetchData(startDate: Date, endDate: Date) {
    const res = await axios.get(`https://lldev.thespacedevs.com/2.2.0/launch/?window_start__gte=${startDate.toISOString()}&window_end__lte=${endDate.toISOString()}`)
    const launches = res.data.results.map((item: ILaunchResponse) => {
      const launchObj = {
        lat: item.pad.latitude,
        lng: item.pad.longitude,
        id: item.id,
        name: item.name,
        launchStartDate: item.window_start,
        launchEndDate: item.window_end,
        padName: item.pad.name
      }
      return launchObj
    })
    setLaunches(launches)
  }


  useEffect(() => {
    fetchData(startDate, endDate);
  }, [startDate, endDate])

  const onFilterChange = (filterValues: { startDate: Date; endDate: Date; }) => {
    setStartDate(filterValues.startDate)
    setEndDate(filterValues.endDate)
  }

  const onMarkerClick = (markerProps: any) => {
    setSelectedLaunch(markerProps)
  }

  return (
    <MainPageWrapper>
      <Filters onSubmitCallback={onFilterChange} selectedLaunch={selectedLaunch} />
      <CustomMap markers={launches} onMarkerClickCallback={onMarkerClick} />
    </MainPageWrapper>
  )
}

export default MainPage