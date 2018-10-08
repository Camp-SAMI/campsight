import React, {Component} from 'react'
import {Sidebar, Menu, Icon} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

class AdminSidebar extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    console.log('EVENT', event.value)
    this.props.history.push(`/${event.value}`)
  }
  render() {
    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible
          width="thin"
        >
          <Menu.Item href="/tickets">
            <Icon name="sticky note outline" />
            Tickets
          </Menu.Item>
          <Menu.Item
            value="reservations"
            onClick={() => this.handleClick({value: 'reservations'})}
          >
            <Icon name="calendar check" />
            Reservations
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="image outline" />
            Campsites
          </Menu.Item>
        </Sidebar>
      </Sidebar.Pushable>
    )
  }
}

export default withRouter(AdminSidebar)
