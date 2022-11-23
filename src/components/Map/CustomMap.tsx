// @ts-nocheck
import { FC, useState } from "react";
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';

// TODO: center on first item in the marker list
interface ICustomMap {
  markers: { lat: number, lng: number, address: string }[]
}

const CustomMap: FC<ICustomMap> = (props) => {
  const { google, markers, onMarkerClickCallback } = props

  const [selectedMarker, setSelectedMarker] = useState(null)
  const [selectedLocationDetails, setSelectedLocationDetails] = useState(null)

  const onMarkerClick = (props, marker) => {
    setSelectedMarker(marker)
    setSelectedLocationDetails(props)
    onMarkerClickCallback(props)
  }

  const cleanUpSelection = () => {
    setSelectedMarker(null)
    setSelectedLocationDetails(null)
    onMarkerClickCallback(null)
  }

  const onInfoWindowClose = () => {
    cleanUpSelection()
  }


  const center = { lat: 0, lng: 0 }
  if (markers.length > 0) {
    center.lat = markers[0].lat
    center.lng = markers[0].lng
  }

  return (
    // <div style={{ height: '100vh', width: '100%' }}>
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

      {selectedMarker && (<InfoWindow
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