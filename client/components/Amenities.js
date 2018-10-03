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
    // const {amenities} = this.props
    const amenities = [{id: 1, category: 'water'}, {id: 2, category: 'power'}]

    return (
      <Dropdown text="Amenities">
        <Dropdown.Menu>
          {amenities.map(amenitie => (
            <Dropdown.Item
              key={amenitie.id}
              id={amenitie.id}
              text={amenitie.category}
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>
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
