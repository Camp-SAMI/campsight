import {addDays, differenceInCalendarDays, format} from 'date-fns'

import React, {PureComponent, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import {InlineDatePicker} from 'material-ui-pickers/DatePicker'

import Checkout from './Checkout'
import {fetchCurrentCampsiteReservations} from '../store/reservation'
import {formatPrice} from '../utils/formatPrice'

class ReservationForm extends PureComponent {
  START_DATE = new Date()
  state = {
    selectedStartDate:
      new Date(this.props.filteredStartTime) || this.START_DATE,
    selectedEndDate:
      new Date(this.props.filteredEndTime) || addDays(this.START_DATE, 1),
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

  disableBookedDays = date => {
    return this.props.currentReservations.includes(format(date, 'MM/DD/YYYY'))
  }

  componentDidMount() {
    this.props.fetchCurrentCampsiteReservations(this.props.id)
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

    // Subtotal of costs
    const subtotal =
      this.props.cost *
      differenceInCalendarDays(selectedEndDate, selectedStartDate)

    return (
      <Fragment>
        <Grid container spacing={24}>
          <Grid className="picker" item xs={12} sm={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <InlineDatePicker
                keyboard
                allowKeyboardControl
                variant="outlined"
                label="Start Date"
                disablePast
                // minDate={selectedStartDate}
                // minDateMessage="Campsite is not available"
                value={selectedStartDate}
                onChange={this.handleDateChange('selectedStartDate')}
                shouldDisableDate={this.disableBookedDays}
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
                minDate={addDays(selectedStartDate, 1)}
                minDateMessage="Campsite is not available"
                value={selectedEndDate}
                onChange={this.handleDateChange('selectedEndDate')}
                shouldDisableDate={this.disableBookedDays}
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
              label="Total Campers"
              value={partyNumber}
              onChange={this.handleChange('partyNumber')}
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                min: 1,
                max: 10
              }}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="display2" component="h2">
              {`Subtotal = ${formatPrice(subtotal)}`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Checkout
              campsiteId={this.props.id}
              startTime={this.state.selectedStartDate}
              endTime={this.state.selectedEndDate}
              partyNumber={this.state.partyNumber}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              email={this.state.email}
              totalCost={subtotal}
            />
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  currentReservations: state.reservation.currentReservations
})

const mapDispatchToProps = dispatch => ({
  fetchCurrentCampsiteReservations: campsiteId =>
    dispatch(fetchCurrentCampsiteReservations(campsiteId))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReservationForm)
)
