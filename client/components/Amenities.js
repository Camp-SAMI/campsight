import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Menu, MenuItem} from '@material-ui/core'
import fetchAmenities from '../store/amenities'

class Amenities extends Component {
  constructor() {
    super()
    this.state = {
      anchorEl: null
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  handleClick(event) {
    this.setState({anchorEl: event.currentTarget})
  }

  handleClose() {
    this.setState({anchorEl: null})
  }
  componentDidMount() {
    this.props.fetchAmenities()
  }

  render() {
    const {anchorEl} = this.state
    const {amenities} = this.props
    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Amenities
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {amenities.map(amenitie => (
            <MenuItem key={amenitie.id}>{amenitie.category}</MenuItem>
          ))}
        </Menu>
      </div>
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
