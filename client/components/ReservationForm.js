import {addDays, lastDayOfYear} from 'date-fns'

import React, {PureComponent, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
// import Button from '@material-ui/core/Button'

import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import {InlineDatePicker} from 'material-ui-pickers/DatePicker'

import Checkout from './Checkout'
import {fetchLatestCampsiteReservation} from '../store/reservation'

class ReservationForm extends PureComponent {
  START_DATE = lastDayOfYear(new Date())
  state = {
    selectedStartDate: this.START_DATE,
    selectedEndDate: addDays(this.START_DATE, 7),
    partyNumber: '1',
    firstName: '',
    lastName: '',
    email: ''
  }

  handleDateChange = name => date => {
    this.setState({[name]: date})
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  componentDidMount() {
    this.props.fetchLatestCampsiteReservation(this.props.id)
  }

  render() {
    const {
      selectedStartDate,
      selectedEndDate,
      firstName,
      lastName,
      partyNumber,
      email
    } = this.state
    const latestDate = addDays(this.props.latestReservation.endTime, 1)

    return (
      <Fragment>
        <Grid container spacing={24}>
          <Grid className="picker" item xs={12} sm={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <InlineDatePicker
                keyboard
                variant="outlined"
                label="Start Date"
                disablePast
                minDate={latestDate}
                value={selectedStartDate}
                onChange={this.handleDateChange('selectedStartDate')}
                format="MM/dd/yyyy"
                mask={[
                  /\d/,
                  /\d/,
                  '/',
                  /\d/,
                  /\d/,
                  '/',
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/
                ]}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid className="picker" item xs={12} sm={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <InlineDatePicker
                keyboard
                variant="outlined"
                label="End Date"
                disablePast
                minDate={addDays(latestDate, 1)}
                value={selectedEndDate}
                onChange={this.handleDateChange('selectedEndDate')}
                format="MM/dd/yyyy"
                mask={[
                  /\d/,
                  /\d/,
                  '/',
                  /\d/,
                  /\d/,
                  '/',
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/
                ]}
              />
            </MuiPickersUtilsProvider>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              autoComplete="firstName"
              value={firstName}
              onChange={this.handleChange('firstName')}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              autoComplete="lastName"
              value={lastName}
              onChange={this.handleChange('lastName')}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-email-input"
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={this.handleChange('email')}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-number"
              label="Campers"
              value={partyNumber}
              onChange={this.handleChange('partyNumber')}
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                min: 1
              }}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Checkout
              campsiteId={this.props.id}
              startTime={this.state.selectedStartDate}
              endTime={this.state.selectedEndDate}
              partyNumber={this.state.partyNumber}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              email={this.state.email}
              cost={this.props.cost}
            />
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  latestReservation: state.reservation
})

const mapDispatchToProps = dispatch => ({
  fetchLatestCampsiteReservation: campsiteId =>
    dispatch(fetchLatestCampsiteReservation(campsiteId))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReservationForm)
)
