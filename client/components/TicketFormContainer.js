import React, {Component, Fragment} from 'react'
import {TicketForm, Camera} from './index'
import {connect} from 'react-redux'

class TicketFormContainer extends Component {
  

  
  // need to setup store to toggle between views

  render() {
    console.log(this.props.toggle)
    return (
      <Fragment>{this.props.toggle ? <Camera /> : <TicketForm />}</Fragment>
    )
  }
}

const mapState = state => {
  
  return {
  toggle: state.ticketFormContainer
}}

export default connect(mapState)(TicketFormContainer)
