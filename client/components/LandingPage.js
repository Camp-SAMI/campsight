import React, {Component} from 'react'
import {connect} from 'react-redux'
import CampsiteCollection from './CampsiteCollection'
import MapView from './MapView'
import {fetchCampsites} from '../store/campsites'
import {fetchAmenities} from '../store/amenities'
import {fetchReservations} from '../store/reservations'
import {fetchCampsite} from '../store/campsite'
import {Grid} from 'semantic-ui-react'

const mapStateToProps = state => {
  return {
    campsites: state.campsites,
    campsite: state.campsite,
    amenities: state.amenities,
    reservations: state.reservations
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCampsites: () => dispatch(fetchCampsites()),
  fetchAmenities: () => dispatch(fetchAmenities()),
  fetchCampsite: id => dispatch(fetchCampsite(id)),
  fetchReservations: () => dispatch(fetchReservations())
})

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      campsites: [],
      campsite: {},
      amenities: [],
      reservations: []
    }
  }

  async componentDidMount() {
    const campsites = await this.props.fetchCampsites()
    // const amenities = await this.props.fetchAmenities();
    const reservations = await this.props.fetchReservations()
    this.setState({
      campsites: campsites,
      // amenities: amenities,
      reservations: reservations
    })
  }

  render() {
    const {campsites, amenities, campsite, reservations} = this.props
    return (
      <div className="MainContainer">
        <div className="ParallaxContainer">{/* <h1>Aloha!</h1> */}</div>

        <div className="ContentContainer">
          <div className="Content">
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <MapView campsites={campsites} campsite={campsite} />
                </Grid.Column>
                <Grid.Column>
                  <CampsiteCollection
                    campsites={campsites}
                    campsite={campsite}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            {/* REMOVE <p> TAGS AND PUT YOUR COMPONENTS INSIDE OF CONTENT CONTAINER */}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)

// 325700-long_exposure-starry_night-Milky_Way-galaxy-nature-camping-forest-landscape-New_Mexico-lights-trees-748x477-2.jpg
