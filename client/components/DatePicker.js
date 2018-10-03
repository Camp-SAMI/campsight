// import React, { Component } from 'react';
// import { Form } from 'semantic-ui-react';
// import { DateRangePicker } from 'react-dates';
// import moment from 'moment';

// function isDayBlocked(day, disabledDates) {
//     return disabledDates.filter(d => d.isSame(day, 'day')).length > 0;
// }

// function DatePicker(props) {
//     const { filteredCampsites, onTimeframeChange} = props;
//     const reservedDates = filteredCampsites.reduce(function(accumulator, currentCampsite) {
//         return [...accumulator, ...currentCampsite.reservation.daysBooked()];
//     }, []);
//     return (
        
//         <DateRangePicker
//             startDate={Date.now()}
//             startDateId='startTime'
//             endDate={Date.now()}
//             endDateId='endTime'
//             isDayBlocked={d => isDayBlocked(d, reservedDates)}
            
//         />
//     );
// }