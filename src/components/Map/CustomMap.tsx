// @ts-nocheck
//  Added the no check here because I did not have time to build proper types for the maps library
// elements
import { FC, SetStateAction, useState } from "react";
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';

interface ICustomMap {
  markers: {
    id: string,
    name: string,
    lat: number,
    lng: number,
    address: string
  }[],
  google: any,
  onMarkerClickCallback: (props: any) => void
}

const CustomMap: FC<ICustomMap> = (props) => {
  const { google, markers, onMarkerClickCallback } = props

  const [selectedMarker, setSelectedMarker] = useState(null)
  const [selectedLocationDetails, setSelectedLocationDetails] = useState<any>(null)

  const onMarkerClick = (props: SetStateAction<null>, marker: SetStateAction<null>) => {
    setSelectedMarker(marker)
    setSelectedLocationDetails(props)
    onMarkerClickCallback(props)
  }

  const cleanUpSelection = () => {
    setSelectedMarker(null)
    setSelectedLocationDetails(null)
    onMarkerClickCallback(null)
  }

  const center = { lat: 0, lng: 0 }
  if (markers.length > 0) {
    center.lat = markers[0].lat
    center.lng = markers[0].lng
  }

  return (
    <Map google={google} zoom={5} style={{ width: '78vw' }} center={center} initialCenter={center}>
      {
        markers.map((mark) => {
          return (
            <Marker
              key={mark.id}
              title={mark.name}
              name={mark.name}
              position={{ lat: mark.lat, lng: mark.lng }}
              onClick={onMarkerClick} />
          )
        })
      }

      {selectedLocationDetails && (<InfoWindow
        marker={selectedMarker}
        visible={!!selectedMarker}
        onClose={cleanUpSelection}>
        <div>
          <div>{selectedLocationDetails.name}</div>
        </div>
      </InfoWindow>)}
    </ Map >

  )

}



const LoadingState = () => (
  <div>Fancy loading container!</div>
)

export default GoogleApiWrapper(
  (props) => ({
    apiKey: 'AIzaSyDrAyXNJT8zTAsyd0YXi86b4uVOjOJCQQc',
    LoadingContainer: LoadingState
  }
  ))(CustomMap)