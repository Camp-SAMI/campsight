import React, {Component} from 'react';
import {connect} from 'react-redux';
import CampsiteCollection from './CampsiteCollection';
import MapView from './MapView';
import Amenities from './Amenities';
import { fetchCampsites } from '../store/campsites';
import { fetchAmenities } from '../store/amenities';
import { fetchReservations } from '../store/reservations';
import { fetchCampsite } from '../store/campsite';
import { getFilteredCampsites } from '../store/filteredCampsites';
import {Grid} from 'semantic-ui-react'

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
  getFilteredCampsites: (campsites, selectedAmenities, timeframe, typing) => dispatch(getFilteredCampsites(campsites, selectedAmenities, timeframe, typing))
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
    }
    this.onAmenitiesChange = this.onAmenitiesChange.bind(this);
    this.onStartTimeChange = this.onStartTimeChange.bind(this);
    this.onEndTimeChange = this.onEndTimeChange.bind(this);
    this.onTypingChange = this.onTypingChange.bind(this);
  }

  async componentDidMount(){
    await this.props.fetchCampsites();
    const campsites = this.props.campsites;
    // const amenities = await this.props.fetchAmenities();
    const reservations = await this.props.fetchReservations();
    this.props.getFilteredCampsites(campsites, [], null, null, '');
    this.setState({
      // amenities: amenities,
      reservations: reservations
    })
  }

  onAmenitiesChange(e) {
    const selectedAmenities = this.state.selectedAmenities;
    if (e.target.checked) {
      selectedAmenities.push(e.target.value);
    }
    else {
      let index = selectedAmenities.indexOf(e.target.value);
      selectedAmenities.splice(index, 1);
    }
    this.setState({ selectedAmenities: selectedAmenities });
    this.props.getFilteredCampsites(this.props.campsites, this.state.selectedAmenities, this.state.startTime, this.state.endTime, this.state.typing);
  }

  onStartTimeChange(e) {
    const startTime = e.target.value;
    const endTime = this.state.endTime;
    this.setState({
      startTime: startTime
    });
    if (endTime) {
      this.props.getFilteredCampsites(this.props.campsites, this.state.selectedAmenities, this.state.startTime, endTime, this.state.typing);
    }
  }

  onEndTimeChange(e) {
    const endTime = e.target.value;
    const startTime = this.state.startTime;
    this.setState({
      endTime: endTime
    });
    if (startTime) {
      this.props.getFilteredCampsites(this.props.campsites, this.state.selectedAmenities, startTime, this.state.endTime, this.state.typing);
    }
  }

  onTypingChange(e) {
    const typing = e.target.value;
    this.setState({
      typing: typing
    });
    this.props.getFilteredCampsites(this.props.campsites, this.state.selectedAmenities, this.state.startTime, this.state.endTime, typing);
  }

  render() {
    const {campsites, amenities, campsite, reservations, filteredCampsites } = this.props;
    return (
      <div className="MainContainer">
        <div className="ParallaxContainer">{/* <h1>Aloha!</h1> */}</div>

        <div className="ContentContainer">
          <div className="Content">
            {/* Amenities takes in onAmenitiesChange. Similar for the datePicker and the Type component */}
            <Amenities />
            <MapView campsites={filteredCampsites} campsite={campsite} />
            <CampsiteCollection campsites={filteredCampsites} campsite={campsite} />
            {/* REMOVE <p> TAGS AND PUT YOUR COMPONENTS INSIDE OF CONTENT CONTAINER */}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)

// 325700-long_exposure-starry_night-Milky_Way-galaxy-nature-camping-forest-landscape-New_Mexico-lights-trees-748x477-2.jpg
