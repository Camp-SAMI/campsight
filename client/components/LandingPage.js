import React, {Component} from 'react'
import {connect} from 'react-redux'
import CampsiteCollection from './CampsiteCollection'
import MapView from './MapView'
import Amenities from './Amenities'
import {fetchCampsites} from '../store/campsites'
import {fetchAmenities} from '../store/amenities'
import {fetchReservations} from '../store/reservations'
import {fetchCampsite} from '../store/campsite'
import {getFilteredCampsites} from '../store/filteredCampsites'
import {Grid, Sticky, Responsive} from 'semantic-ui-react'
import moment from 'moment';
// import {Grid, Sticky} from 'semantic-ui-react'
import Submenu from './Submenu'

const mapStateToProps = state => {
  return {
    campsites: state.campsites,
    campsite: state.campsite,
    amenities: state.amenities,
    reservations: state.reservations,
    filteredCampsites: state.filteredCampsites
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCampsites: () => dispatch(fetchCampsites()),
  fetchAmenities: () => dispatch(fetchAmenities()),
  fetchCampsite: id => dispatch(fetchCampsite(id)),
  fetchReservations: () => dispatch(fetchReservations()),
  getFilteredCampsites: (campsites, selectedAmenities, startTime, endTime, typing) => dispatch(getFilteredCampsites(campsites, selectedAmenities, startTime, endTime, typing))
})

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedAmenities: [],
      typing: '',
      startTime: null,
      endTime: null,
      reservations: [],
      reservedDates: []
    }
    this.onAmenitiesChange = this.onAmenitiesChange.bind(this);
    this.onTypingChange = this.onTypingChange.bind(this);
    this.onStartTimeChange = this.onStartTimeChange.bind(this);
    this.onEndTimeChange = this.onEndTimeChange.bind(this);
  }

  async componentDidMount(){
    console.log('this.props', this.props);
    await this.props.fetchCampsites();
    // const campsites = this.props.campsites;
    this.props.fetchAmenities();
    this.props.fetchReservations();
    // const reservations = this.props.reservations;
    this.props.getFilteredCampsites(this.props.campsites, [], null, null, '');
    // const filteredReservations = this.props.filteredCampsites.map(c => c.reservations);
    // const filteredDates = filteredReservations.map(r => r.daysBooked);
    // console.log('filteredDates', filteredDates);
    this.setState({
      // amenities: amenities,
      reservations: this.props.reservations
    });
  }

  onAmenitiesChange(e) {
    const selectedAmenities = this.state.selectedAmenities
    if (e.target.checked) {
      selectedAmenities.push(e.target.value)
    } else {
      let index = selectedAmenities.indexOf(e.target.value)
      selectedAmenities.splice(index, 1)
    }
    this.setState({selectedAmenities: selectedAmenities})
    this.props.getFilteredCampsites(
      this.props.campsites,
      this.state.selectedAmenities,
      this.state.startTime,
      this.state.endTime,
      this.state.typing
    )
  }

  onStartTimeChange(e) {
    console.log('e', e.currentTarget);
    const startTime = e.target.value;
    const endTime = this.state.endTime;
    this.setState({
      startTime: startTime
    });
    if (startTime && endTime) {
      this.props.getFilteredCampsites(this.props.campsites, this.state.selectedAmenities, startTime, endTime, this.state.typing);
    }
  }

  onEndTimeChange(e) {
    console.log('e', e.target);
    const startTime = this.state.startTime;
    const endTime = e.target.value;
    this.setState({
      endTime: endTime
    });
    if (startTime && endTime) {
      this.props.getFilteredCampsites(this.props.campsites, this.state.selectedAmenities, startTime, endTime, this.state.typing);
    }
  }

  onTypingChange(e) {
    const typing = e.target.value
    this.setState({
      typing: typing
    })
    this.props.getFilteredCampsites(
      this.props.campsites,
      this.state.selectedAmenities,
      this.state.startTime,
      this.state.endTime,
      typing
    )
  }

  render() {
    const {
      campsites,
      amenities,
      campsite,
      reservations,
      filteredCampsites
    } = this.props

    return (
      <div className="MainContainer">
        <div className="ParallaxContainer">{/* <h1>Aloha!</h1> */}</div>

        <div className="ContentContainer">
          <div className="Content">
            {/* Amenities takes in onAmenitiesChange. Similar for the datePicker and the Type component */}

            <Submenu />
            <Grid stackable columns={2}>
              <Grid.Row stackable columns={2}>
                <Grid.Column width={6}>
                  <CampsiteCollection
                    campsites={filteredCampsites}
                    campsite={campsite}
                  />
                </Grid.Column>
                {/* <Sticky> */}
                <Grid.Column width={9}>
                  <MapView campsites={filteredCampsites} campsite={campsite} />
                </Grid.Column>
                {/* </Sticky> */}
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
