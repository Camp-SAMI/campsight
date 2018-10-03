import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';

function isDayBlocked(day, disabledDates) {
    return disabledDates.filter(d => d.isSame(day, 'day')).length > 0;
}

function DatePicker(props) {
    const { filteredDates, onStartTimeChange, onEndTimeChange, startTime, endTime } = props;
    return (
        <Form>
            <DateInput name="startTime" value={startTime} onChange={onStartTimeChange} disable={filteredDates } />
            <DateInput name="endTime" value={endTime} onChange={onEndTimeChange} disable={filteredDates} />
        </Form>
    );
}