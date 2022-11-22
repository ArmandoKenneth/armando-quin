// @ts-nocheck
import { FC, useEffect, useState } from "react"
import axios from 'axios';
import styled from 'styled-components'

import CustomMap from "./Map/CustomMap"
import Filters from "./Filters/Filter";

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

  async function fetchData(startDate, endDate) {
    const res = await axios.get(`https://lldev.thespacedevs.com/2.2.0/launch/?window_start__gte=${startDate.toISOString()}&window_end__lte=${endDate.toISOString()}`)
    const launches = res.data.results.map(item => {
      const launchObj = {
        lat: item.pad.latitude,
        lng: item.pad.longitude,
        id: item.id,
        name: item.name
      }
      return launchObj
    })
    setLaunches(launches)
  }


  useEffect(() => {
    fetchData(startDate, endDate);
  }, [startDate, endDate])

  const onFilterChange = (filterValues) => {
    setStartDate(filterValues.startDate)
    setEndDate(filterValues.endDate)
  }

  return (
    <MainPageWrapper>
      <Filters onSubmitCallback={onFilterChange} />
      <CustomMap markers={launches} />
    </MainPageWrapper>
  )
}

export default MainPage