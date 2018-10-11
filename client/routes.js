import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  LandingPage,
  CampersList,
  CamperProfile,
  AdminSidebar,
  TicketFormContainer,
  Reservations,
  TicketList,
  AdminCampsites,
  AddCampsite,
  Itinerary
} from './components'
import {me} from './store'
import { Grid } from 'semantic-ui-react';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props;
    const displaySidebar = isLoggedIn && window.location.pathname !== '/';
    return (
      <Grid>
        {displaySidebar&&<Grid.Column width={2}>
          <div style={styles.div}>
            <AdminSidebar  />
          </div>
        </Grid.Column>}
        <Grid.Column width={displaySidebar ? 14 : 16}>
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/ticketform" component={TicketFormContainer} />
            <Route path="/itinerary" component={Itinerary} />
            <Route exact path="/" component={LandingPage} />
            {/* commented out route should probably lead to detailed campsite view component */}
            {isLoggedIn && (
              <Switch>
                {/* Routes placed here are only available after logging in */}
                <Route path="/reservations" component={Reservations} />
                <Route path="/tickets" component={TicketList} />
                <Route exact path="/campsites" component={AdminCampsites} />
                <Route path="/campsites/add" component={AddCampsite} />
                <Route exact path="/campers/:camperId" component={CamperProfile} />
                <Route exact path="/campers" component={CampersList} />
                <Route path="/home" component={UserHome} />
              </Switch>
            )}
            {/* Displays our Login component as a fallback */}
            {/* <Route component={Login} /> */}
            {/* <Route path="*" component={LandingPage} /> */}
          </Switch>
        </Grid.Column>
      </Grid>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

/**STYLES */
const styles = {
  div: {
    height: '100vh',
    marginTop: -2
  }
}