import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
import moment from 'moment';

export default class DatePicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startTime: '',
            endTime: ''
        }
    }

    handleChange = (event, {name = undefined, value}) => {
        if (this.state.hasOwnProperty(name)){
            this.setState({ [name]: value });
        }
        this.props.getFilteredCampsites(this.props.filteredCampsites, this.props.selectedAmenities, this.state.startTime, this.state.endTime, this.props.typing);
        console.log(name, value);
    }

    render() {
        const { onStartTimeChange, onEndTimeChange } = this.props;
        return (
            <Form>
                <DateInput dateFormat="MM-DD-YYYY" placeholder="startTime" name="startTime" value={this.state.startTime} iconPosition="left" preserveViewMode={false} autoComplete="off" onChange={onStartTimeChange} />
                <DateInput dateFormat="MM-DD-YYYY" placeholder="endTime" name="endTime" value={this.state.endTime} iconPosition="left" preserveViewMode={false} autoComplete="off" onChange={onEndTimeChange} />
            </Form>
        );
    }
}