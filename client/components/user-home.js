import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Grid} from 'semantic-ui-react'
import AdminSidebar from './AdminSidebar'
<<<<<<< HEAD
import CampersList from './CampersList'
import TicketList from './TicketList'
import Reservations from './Reservations'
import AdminCamsites from './AdminCampsites'
=======
import TopCampsitesThisWeek from './TopCampsitesThisWeek';
import Insights from './Insights';
>>>>>>> 2f45ad45f07a38d30239a73d904e63a5349121d8

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  const campers = props.campersToggle
  const tickets = props.ticketsToggle
  const reservations = props.reservationsToggle
  const campsites = props.campsitesToggle
  return (
<<<<<<< HEAD
    <Grid>
      <Grid.Column width={2}>
        <div style={styles.div}>
          <AdminSidebar />
        </div>
      </Grid.Column>
      <Grid.Column width={12}>
        {campers && <CampersList />}
        {reservations && <Reservations />}
        {tickets && <TicketList />}
        {campsites && <AdminCamsites />}
      </Grid.Column>
    </Grid>
=======
    <Fragment>
      <div style={styles.div}>
        <AdminSidebar style={{position: 'relative'}} />
      </div>
      <h3>Welcome, {email}</h3>
      <Insights />
    </Fragment>
>>>>>>> 2f45ad45f07a38d30239a73d904e63a5349121d8
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    campersToggle: state.campersToggle,
    ticketsToggle: state.ticketsToggle,
    reservationsToggle: state.reservationsToggle,
    campsitesToggle: state.campsitesToggle
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
