import areIntervalsOverlapping from 'date-fns/areIntervalsOverlapping';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import convertToChartData from './convertToChartData';

export function getTopCampsitesThisWeek(campsites) {
    let today = Date.now();
    let start = startOfWeek(today);
    let end = endOfWeek(today);
    let dataHash = {};
    for (let a = 0; a < campsites.length; a++) {
        let campsite = campsites[a];
        let reservationLength = campsite.reservations ? campsite.reservations.length : 0;
        for (let b = 0; b < reservationLength; b++) {
            let reservation = campsite.reservations[b];
            // console.log('res', reservation);
            if (areIntervalsOverlapping({start: reservation.startTime, end: reservation.endTime}, {start: start, end: end })){
                if (!dataHash[campsite.name])
                    dataHash[campsite.name] = 1;
                else
                    dataHash[campsite.name]++;
            }
        }
    }
    const cdata = convertToChartData(dataHash, 'campsite', 'reservation_count').sort((a, b) => b.reservation_count - a.reservation_count);
    // console.log('cdata', cdata);
    return cdata.slice(0,10);
}

//more optimized version of the function, takes in reservations instead, prefiltered.
export function getTopWeekCampsites(reservations) {
    let dataHash = {};
    for (let a = 0; a < reservations.length; a++) {
        if (dataHash[reservations.campsite.name])
            dataHash[reservations.campsite.name]++;
        else
            dataHash[reservations.campsite.name] = 1;
    }
    return convertToChartData(dataHash, 'campsite', 'reservation_count');
}