import React from 'react'
import {Menu, Icon} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

const AdminSidebar = props => {
  return (
    <Menu style={styles.div}>
      <Menu.Menu
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        color="teal"
      >
        <Menu.Item as={NavLink} to="/home/campers">
          <Icon name="users" />
          Campers
        </Menu.Item>
        <Menu.Item as={NavLink} to="/home/tickets">
          <Icon name="sticky note outline" />
          Tickets
        </Menu.Item>
        <Menu.Item as={NavLink} to="/home/reservations">
          <Icon name="calendar check" />
          Reservations
        </Menu.Item>
        <Menu.Item as={NavLink} to="/home/campsites">
          <Icon name="image outline" />
          Campsites
        </Menu.Item>
        <Menu.Item as={NavLink} to="/home">
          <Icon name="line graph" />
          Analitics
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

const styles = {
  div: {
    height: '100%',
    backgroundColor: '#1CB5AC',
    width: '10%'
  }
}

export default AdminSidebar
