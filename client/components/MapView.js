import React, {Component} from 'react'
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react'
import {GOOGLE_MAPS_API_KEY} from '../secrets'
import {Modal} from 'semantic-ui-react'
import CampsiteDetail from './CampsiteDetail'

import Typogragphy from '@material-ui/core/Typography'
import {typgoraphy} from '@material-ui/core/styles'
// if (process.env.NODE_ENV !== 'production') require('../secrets')

class MapView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      selectedCampsiteId: 1
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal(campsite, e) {
    this.setState({
      selectedCampsiteId: campsite.id,
      isModalOpen: true
    })
  }

  closeModal() {
    this.setState({
      selectedCampsiteId: 1,
      isModalOpen: false
    })
  }

  //For each campsite in campsites, render a marker. If clicked on, it should open the modal page. If hovered over, it should display a small info window?
  render() {
    const {campsites, campsite} = this.props
    return (
      <div className="mapContainer">
        <Map
          google={this.props.google}
          initialCenter={{lat: 43.769405, lng: -89.202743}}
          zoom={17}
          style={styles.map}
        >
          {campsites.map(camp => {
            return (
              <Marker
                key={camp.id}
                name={camp.name}
                onClick={e => this.openModal(camp, e)}
                position={{
                  lat: camp.location.coordinates[0],
                  lng: camp.location.coordinates[1]
                }}
                icon={{
                  url: '/campericon.png'
                }}
              />
            )
          })}
        </Map>

        <Modal open={this.state.isModalOpen} onClose={this.closeModal}>
          <Modal.Content>
            <CampsiteDetail id={this.state.selectedCampsiteId} />
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

const styles = {
  map: {
    height: 700
  }
}

const wrapperContainer = GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_API_KEY
})(MapView)

export default wrapperContainer
