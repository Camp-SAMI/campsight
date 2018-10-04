import React, {Component} from 'react'
import {Sidebar, Menu, Icon} from 'semantic-ui-react'

class AdminSidebar extends Component {
  render() {
    return (
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible
        width="thin"
        style={styles.sidebar}
      >
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

const styles = {
  sidebar: {
    margin: 40,
    height: '100vh'
  }
}

export default AdminSidebar
