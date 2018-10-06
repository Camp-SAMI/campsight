import React, {Component, Fragment} from 'react'
import {TicketForm, Camera} from './index'

class TicketFormContainer extends Component {
  state = {
    toggle: false
  }

  // need to setup store to toggle between views 

  render() {


    return (
      <Fragment>

        <TicketForm />
        <Camera />
      </Fragment>
    )
  }
}

export default TicketFormContainer
