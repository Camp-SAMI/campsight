import React, {Component} from 'react'
import {Form} from 'semantic-ui-react'
import {DateInput} from 'semantic-ui-calendar-react'
import moment from 'moment'

export default class DatePicker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      startTime: '',
      endTime: ''
    }
  }

  handleChange = (event, {name = undefined, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({[name]: value})
    }
    if (name === 'startTime') {
      this.props.onStartTimeChange(event, {value})
    } else {
      this.props.onEndTimeChange(event, {value})
    }
    // this.props.getFilteredCampsites(this.props.filteredCampsites, this.props.selectedAmenities, this.state.startTime, this.state.endTime, this.props.typing);
  }

  render() {
    const {onStartTimeChange, onEndTimeChange} = this.props
    return (
      <Form style={{marginRight: 20, marginTop: 10}}>
        <DateInput
          dateFormat="MM-DD-YYYY"
          placeholder="Start Time"
          name="startTime"
          value={this.state.startTime}
          iconPosition="left"
          preserveViewMode={false}
          autoComplete="off"
          onChange={this.handleChange}
          style={{padding: 10}}
        />
        <DateInput
          dateFormat="MM-DD-YYYY"
          placeholder="End Time"
          name="endTime"
          value={this.state.endTime}
          iconPosition="left"
          preserveViewMode={false}
          autoComplete="off"
          onChange={this.handleChange}
          style={{padding: 10}}
        />
      </Form>
    )
  }
}
