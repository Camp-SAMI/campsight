import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Grid} from 'semantic-ui-react'
import AdminSidebar from './AdminSidebar'
import CampersList from './CampersList'
import TicketList from './TicketList'
import Reservations from './Reservations'
import AdminCamsites from './AdminCampsites'

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
