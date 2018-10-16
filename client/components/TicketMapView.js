import React, {Component} from 'react'
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react'
import {GOOGLE_MAPS_API_KEY} from '../secrets'

// if (process.env.NODE_ENV !== 'production') require('../secrets')

class TicketMapView extends Component {
  //For each campsite in campsites, render a marker. If clicked on, it should open the modal page. If hovered over, it should display a small info window?
  render() {
    const location = this.props.location
    return (
      <div>
        <Map
          google={this.props.google}
          initialCenter={{
            lat: location.coordinates[0],
            lng: location.coordinates[1]
          }}
          zoom={17}
        >
          <Marker
            name="ticket"
            position={{
              lat: location.coordinates[0],
              lng: location.coordinates[1]
            }}
            // icon={{
            //   url: '/campericon.png'
            // }}
          />
        </Map>
      </div>
    )
  }
}

const wrapperContainer = GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_API_KEY
})(TicketMapView)

export default wrapperContainer
