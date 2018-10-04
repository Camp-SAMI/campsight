import React, {Component} from 'react'
import {Sidebar, Menu, Icon} from 'semantic-ui-react'

class AdminSidebar extends Component {
  render() {
    return (
      <Sidebar as={Menu} inverted vertical visible width="thin">
        <Menu.Item as="a">
          <Icon name="sticky note outline" />
          Tickets
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="calendar check" />
          Reservations
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="image outline" />
          Campsites
        </Menu.Item>
      </Sidebar>
    )
  }
}

export default AdminSidebar
