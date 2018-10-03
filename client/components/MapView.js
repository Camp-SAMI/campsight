import React, {Component} from 'react'
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react'
import {GOOGLE_MAPS_API_KEY} from '../secrets'

import Typogragphy from '@material-ui/core/Typography'
import {typgoraphy} from '@material-ui/core/styles'
// if (process.env.NODE_ENV !== 'production') require('../secrets')

class MapView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      infoWindowDisplayed: false,
      selectedMarker: {}
    }
  }

  //For each campsite in campsites, render a marker. If clicked on, it should open the modal page. If hovered over, it should display a small info window?
  render() {
    const {campsites, campsite} = this.props
    return (
      <Map
        google={this.props.google}
        initialCenter={{lat: 42.856, lng: -86.89034}}
        zoom={9}
      >
        {campsites.map(camp => {
          return (
            <Marker key={camp.id} name={camp.name} position={camp.location} />
          )
        })}
      </Map>
    )
  }
}

const wrapperContainer = GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_API_KEY
})(MapView)

export default wrapperContainer
