import areIntervalsOverlapping from 'date-fns/areIntervalsOverlapping';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import convertToChartData from './convertToChartData';

export default function getCampsiteTypeData(campsites) {
    let today = Date.now();
    let start = startOfWeek(today);
    let end = endOfWeek(today);
    let typeHash = {};
    for (let c = 0; c < campsites.length; c ++) {
        let camp = campsites[c];
        let reservationLength = camp.reservations ? camp.reservations.length : 0;
        let typing = camp.typing;
        for (let d = 0; d < reservationLength; d++) {
            let reservation = camp.reservations[d];
            if (areIntervalsOverlapping({start: reservation.startTime, end: reservation.endTime}, {start: start, end: end})) {
                if(!typeHash[typing])
                    typeHash[typing] = 1;
                else
                    typeHash[typing]++;
            }
        }
    }
    return convertToChartData(typeHash, 'x', 'y');
};