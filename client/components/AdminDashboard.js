import React, {Component} from 'react'
import {connect} from 'react-redux'
import {TicketForm} from './index'
import AdminSidebar from './AdminSidebar'

class AdminDashboard extends Component {
  render() {
    return (
   
      <div style={styles.div}>
{/*       
        <TicketForm /> */}
     
    
        <AdminSidebar style={{position: 'relative'}}/>
      </div>
    )
  }
}

const styles = {
  div: {
    height: '100vh'
  }
}

export default AdminDashboard
