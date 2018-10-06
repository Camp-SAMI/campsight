import React, {Component, Fragment} from 'react'
import {TicketForm, Camera} from './index'

class TicketFormContainer extends Component {
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
