import React, {Component} from 'react'
import {connect} from 'react-redux'
import AdminSidebar from './AdminSidebar'

class AdminDashboard extends Component {
  render() {
    return (
      <div style={styles.div}>
        <AdminSidebar />
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
