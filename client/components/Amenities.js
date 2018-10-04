import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {withRouter} from 'react-router-dom'
import {Dropdown} from 'semantic-ui-react'
import fetchAmenities from '../store/amenities'

class Amenities extends Component {
  componentDidMount() {
    this.props.fetchAmenities()
  }

  render() {
    const {amenities, onAmenitiesChange } = this.props
    const amenityItems = amenities.map(function(amenity) { return {key: amenity.category, text: amenity.category, value: amenity.category} } );
    // const amenities = [
    //   {key: 'meteor', text: 'Meteor', value: 'meteor'},
    //   {key: 'node', text: 'NodeJS', value: 'node'},
    //   {key: 'plumbing', text: 'Plumbing', value: 'plumbing'},
    //   {key: 'python', text: 'Python', value: 'python'},
    //   {key: 'rails', text: 'Rails', value: 'rails'},
    //   {key: 'react', text: 'React', value: 'react'},
    //   {key: 'repair', text: 'Kitchen Repair', value: 'repair'},
    //   {key: 'ruby', text: 'Ruby', value: 'ruby'},
    //   {key: 'ui', text: 'UI Design', value: 'ui'},
    //   {key: 'ux', text: 'User Experience', value: 'ux'}
    // ]

    return (
      <Dropdown
        placeholder="Amenities"
        fluid
        multiple
        selection
        options={amenityItems}
        simple
        item
        onChange={onAmenitiesChange}
      />
    )
  }
}

const mapStateToProps = state => ({
  amenities: state.amenities
})

const mapDispatchToProps = dispatch => ({
  fetchAmenities: () => dispatch(fetchAmenities)
})

export default connect(mapStateToProps, mapDispatchToProps)(Amenities)
