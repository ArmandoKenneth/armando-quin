// @ts-nocheck
import { FC } from "react";
import { GoogleApiWrapper, Map,  Marker } from 'google-maps-react';

// TODO: center on first item in the marker list
interface ICustomMap {
  markers: { lat: number, lng: number, address: string }[]
}

const CustomMap: FC<ICustomMap> = (props) => {

  const { google, markers } = props

  const onMarkerClick = () => {
    console.log('do something')
  }

  const onInfoWindowClose = () => {
    console.log('do something 2')
  }

  return (
    // <div style={{ height: '100vh', width: '100%' }}>
    <Map google={google} zoom={14} style={{width: '78vw'}}>
      {markers.map((mark) => {
        return (
          <Marker
            key={mark.id}
            title={mark.name}
            name={mark.name}
            position={{ lat: mark.lat, lng: mark.lng }} />
        )
      })}
    </Map>

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