import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Grid} from 'semantic-ui-react'
import AdminSidebar from './AdminSidebar'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  const bob = false
  const stan = true
  return (
    <Grid>
      <Grid.Column width={2}>
        <div style={styles.div}>
          <AdminSidebar />
        </div>
      </Grid.Column>
      <Grid.Column width={12}>
        <h1>HELLO WORLD</h1>
      </Grid.Column>
    </Grid>
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
    height: '100vh',
    marginTop: -2
  }
}
