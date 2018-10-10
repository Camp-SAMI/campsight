import React, {Component} from 'react'
import {Sidebar, Menu, Icon} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {toggleAnalitics} from '../store'
import {toggleCampers} from '../store/campersToggle'
import {toggleTickets} from '../store/ticketsToggle'
import {toggleReservations} from '../store/reservationsToggle'
import {toggleCampsites} from '../store/campsitesToggle'

class AdminSidebar extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    // console.log('EVEEEENT', event.value)
    if (event.value === 'campers') {
      this.props.toggleCampers()
    }
    if (event.value === 'reservations') {
      this.props.toggleReservations()
    }
    if (event.value === 'tickets') {
      this.props.toggleTickets()
    }
    if (event.value === 'campsites') {
      this.props.toggleCampsites()
    }
  }
  render() {
    return (
      // <div>
      <Menu style={styles.div}>
        <Menu.Menu
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          color="teal"
        >
          <Menu.Item onClick={() => this.handleClick({value: 'campers'})}>
            <Icon name="users" />
            Campers
          </Menu.Item>
          <Menu.Item onClick={() => this.handleClick({value: 'tickets'})}>
            <Icon name="sticky note outline" />
            Tickets
          </Menu.Item>
          <Menu.Item onClick={() => this.handleClick({value: 'reservations'})}>
            <Icon name="calendar check" />
            Reservations
          </Menu.Item>
          <Menu.Item onClick={() => this.handleClick({value: 'campsites'})}>
            <Icon name="image outline" />
            Campsites
          </Menu.Item>
          <Menu.Item>
            <Icon name="line graph" />
            Analitics
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      // </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  toggleCampers: () => dispatch(toggleCampers()),
  toggleTickets: () => dispatch(toggleTickets()),
  toggleReservations: () => dispatch(toggleReservations()),
  toggleCampsites: () => dispatch(toggleCampsites()),
  toggleAnalitics: () => dispatch(toggleAnalitics())
})

const styles = {
  div: {
    height: '100%',
    backgroundColor: '#1CB5AC',
    width: '10%'
  }
}

export default connect(null, mapDispatchToProps)(withRouter(AdminSidebar))
