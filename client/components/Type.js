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
    const types = [
      {value: 'Tent', text: 'Tent'},
      {value: 'Trailer', text: 'Trailer'},
      {value: 'Cabin', text: 'Cabin'}
    ]
    return <Dropdown placeholder="type" fluid selection options={types} />
  }
}

export default Type
