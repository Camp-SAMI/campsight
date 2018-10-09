import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Container, Divider} from 'semantic-ui-react'
import AdminSidebar from './AdminSidebar'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <Fragment>
      <div style={styles.div}>
        <AdminSidebar style={{position: 'relative'}} />
      </div>
      <h3>Welcome, {email}</h3>
    </Fragment>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

/**STYLES */
const styles = {
  div: {
    height: '100vh'
  }
}
