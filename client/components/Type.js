import React, {Component} from 'react'
import {Button, Menu, MenuItem} from '@material-ui/core'

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
    const {anchorEl} = this.state
    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Type
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClick}>Tent</MenuItem>
          <MenuItem onClick={this.handleClick}>Trailer</MenuItem>
          <MenuItem onClick={this.handleClick}>Cabin</MenuItem>
        </Menu>
      </div>
    )
  }
}

export default Type
