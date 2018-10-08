import React, {Component} from 'react'
import {Menu, Dropdown} from 'semantic-ui-react'
import Amenities from './Amenities'
import Type from './Type'
import DatePicker from './DatePicker'

class Submenu extends Component {
  render() {
    const {
      onAmenitiesChange,
      onStartTimeChange,
      onEndTimeChange,
      onTypingChange
    } = this.props
    return (
      <Menu inverted attached="top" stackable style={{height: 60}}>
        <Menu.Item>
          <Amenities onAmenitiesChange={onAmenitiesChange} />
        </Menu.Item>
        <Menu.Item>
          <DatePicker
            onStartTimeChange={onStartTimeChange}
            onEndTimeChange={onEndTimeChange}
          />
        </Menu.Item>
        <Menu.Item>
          <Type onTypingChange={onTypingChange} />
        </Menu.Item>
      </Menu>
    )
  }
}

export default Submenu
