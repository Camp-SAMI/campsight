import {addDays} from 'date-fns'

import React, {PureComponent, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'

import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import {InlineDatePicker} from 'material-ui-pickers/DatePicker'

import {fetchReservations} from './store/reservations'

class ReservationForm extends PureComponent {
  START_DATE = new Date()
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
    console.log('State as it changes =>', this.state)
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit = () => {
    console.log('I am outta here!')
  }

  componentDidMount() {
    this.props.fetchLatestReservation(this.props.match.params.campsiteId)
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

    return (
      <Fragment>
        <Typography variant="title" gutterBottom>
          Reserve this Campsite
        </Typography>
        <Grid container spacing={24}>
          <Grid className="picker" item xs={12} sm={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <InlineDatePicker
                keyboard
                variant="outlined"
                label="Start Date"
                disablePast
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
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Reserve
            </Button>
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchLatestReservation: campsiteId => dispatch(fetchReservations(campsiteId))
})

export default withRouter(connect(null, mapDispatchToProps)(ReservationForm))
