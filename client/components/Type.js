import React, {Component} from 'react'
import {Dropdown} from 'semantic-ui-react'

class Type extends Component {
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

  render() {
    return (
      <Dropdown text="type">
        <Dropdown.Menu>
          <Dropdown.Item text="Tent" />
          <Dropdown.Item text="Trailer" />
          <Dropdown.Item text="Cabin" />
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

export default Type
