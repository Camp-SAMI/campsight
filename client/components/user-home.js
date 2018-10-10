import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Grid} from 'semantic-ui-react'
import AdminSidebar from './AdminSidebar'
import CampersList from './CampersList'
import TicketList from './TicketList'
import Reservations from './Reservations'
import AdminCamsites from './AdminCampsites'
import CamperProfile from './CamperProfile'
import Insights from './Insights'
import {Route, Switch} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  return (
    <Grid>
      <Grid.Column width={2}>
        <div style={styles.div}>
          <AdminSidebar />
        </div>
      </Grid.Column>
      <Grid.Column width={12}>
        <Switch>
          <Route
            exact
            path="/home/campers/:camperId"
            component={CamperProfile}
          />
          <Route exact path="/home/campers" component={CampersList} />
          <Route path="/home/tickets" component={TicketList} />
          <Route exact path="/home/reservations" component={Reservations} />
          <Route path="/home/campsites" component={AdminCamsites} />
          <Route path="/home" component={Insights} />
        </Switch>
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
