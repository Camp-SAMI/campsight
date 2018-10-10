import areIntervalsOverlapping from 'date-fns/areIntervalsOverlapping';
import getMonth from 'date-fns/getMonth';
import subMonths from 'date-fns/subMonths'
import addMonths from 'date-fns/addMonths';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import convertToChartData from './convertToChartData';
import getYear from 'date-fns/getYear';
import integerMonthTable from './IntegerMonthTable';

export default function getPriorReservations(reservations) {
    let today = Date.now();
    let currentDate = today;
    let startDate = subMonths(today, 6);
    let monthStart;
    let monthEnd;
    let currMonth;

    let timeHash = {};

    while (startDate <= currentDate) {
        monthStart = startOfMonth(startDate);
        monthEnd = endOfMonth(startDate);
        let filteredReservations = reservations.filter(rev => areIntervalsOverlapping({start: rev.startTime, end: rev.endTime}, {start: monthStart, end: monthEnd}));
        currMonth = getMonth(startDate);
        let key = integerMonthTable.get(currMonth);
        timeHash[key] = filteredReservations.length || 0;
        startDate = addMonths(startDate, 1);
    }
    let chartData = convertToChartData(timeHash, 'x', 'y');
    return chartData;
}