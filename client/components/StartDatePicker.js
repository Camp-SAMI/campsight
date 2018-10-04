import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';

export default function StartDatePicker(props) {
    const { startTime, timeChange } = props;
    return (
        <Dropdown text="startTime">
            <Dropdown.Menu>
                <Dropdown.Item>
                    <DateInput name="startTime" value={startTime} onChange={timeChange} />
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}