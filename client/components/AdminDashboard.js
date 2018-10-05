import React, {Component} from 'react'
import {connect} from 'react-redux'
import {TicketForm} from './index'

class AdminDashboard extends Component {
  render() {
    return (
      <div>
      
        <TicketForm />
      </div>
    )
  }
}

export default AdminDashboard
