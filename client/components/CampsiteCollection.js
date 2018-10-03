import React, {Component} from 'react'
// import { fetchCampsites } from '../store/campsites';
import {fetchAmenities} from '../store/amenities'
import CampsiteBlock from './CampsiteBlock'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

// const mapStateToProps = state => {
//     return {
//         campsites: state.campsites,
//         amenities: state.amenities
//     }
// }

// const mapDispatchToProps = dispatch => ({
//     fetchAmenities: () => dispatch(fetchAmenities())
// });

//we probably want to have pagination here? For that reason, making it a stateful component makes sense
class CampsiteCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startTime: '',
      endTime: '',
      campsiteType: '',
      perPage: 6,
      currentPage: [],
      numPages: 0,
      searching: false
    }
  }

  componentDidMount() {
    const perPage = this.state.perPage
    const numPages = Math.ceil(this.props.campsites.length / perPage)
    this.setState({
      numPages: numPages
    })
    // console.log(this.props.campsites);
  }

  render() {
    const campsites = this.props.campsites
    const currentPage = this.state.currentPage
    const isSearch = this.state.isSearch
    const amenities = this.state.amenities
    if (this.props.campsites.length && this.state.currentPage) {
      return (
        <div>
          <div>
            <div>
              <h2>Campsite Listings</h2>
            </div>
          </div>
          <br />
          {/* Until a block view of the campsite is written, the mapped campsites displayed are just the list of ids */}
          {/* Additionally, each block view should take in a handleClick component that opens up the detailed view of that campsite */}
          <ul>
            {this.props.campsites.map(campsite => (
              <CampsiteBlock key={campsite.id} campsite={campsite} />
            ))}
          </ul>
        </div>
      )
    } else {
      return <h3>There are no campsites currently available</h3>
    }
  }
}

export default CampsiteCollection
