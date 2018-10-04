import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';

export default function EndDatePicker(props) {
    const { endTime, timeChange } = props;
    // console.log('filteredDates', filteredDates);
    return (
        // <Form>
            <DateInput name="endTime" value={endTime} onChange={timeChange} />
        // </Form>
    );
}