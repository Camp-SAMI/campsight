import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
import Amenities from './Amenities'
import Type from './Type'

class Submenu extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item>
          <Amenities />
        </Menu.Item>
        <Menu.Item>
          <Type />
        </Menu.Item>
      </Menu>
    )
  }
}

export default Submenu
