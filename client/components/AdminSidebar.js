import React, {Component} from 'react'
import {Sidebar, Menu, Icon} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

class AdminSidebar extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.history.push(`/${event.value}`)
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
          <Menu.Item href="/campers">
            <Icon name="users" />
            Campers
          </Menu.Item>
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
          <Menu.Item href="/campsites">
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

const styles = {
  div: {
    height: '100%',
    backgroundColor: '#1CB5AC',
    width: '10%'
  }
}

export default withRouter(AdminSidebar)
