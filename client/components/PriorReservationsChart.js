import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchReservations } from '../store/reservations';
import  getPriorReservations from '../utils/getPrevReservationData';
import { VictoryChart, VictoryArea, VictoryAxis, VictoryTheme } from 'victory';

const generateTickValues = (length) => {
    let ticks = [];
    for (let u = 1; u < length + 1; u++){
        ticks.push(u);
    }
}

const mapStateToProps = state => {
    return {
        reservations: state.reservations
    }
};

const mapDispatchToProps = dispatch => ({
    fetchReservations: () => dispatch(fetchReservations())
})

class PriorReservationsChart extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        await this.props.fetchReservations();
        const priorReservations = getPriorReservations(this.props.reservations);
        this.setState({
            data: priorReservations
        });
    }

    render() {
        const data  = this.state.data.sort((a,b) => b.x - a.x);
        console.log('data', data);
        if (data.length < 1) return (<h3>Loading</h3>);
        let monthNames = data.map(m => m.x);
        // console.log('monthNames', monthNames);
        let tickValues = generateTickValues(data.length) || [];
        return (
            <VictoryChart
                theme={VictoryTheme.material}>
                <VictoryAxis
                    tickValues={tickValues}
                    tickFormat={monthNames}
                    style={{
                        tickLabels: {fontSize: 8, padding: 10},
                        grid: { strokeWidth: 2, stroke: 'black' }
                    }}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => x}
                    style={{
                        tickLabels: {fontSize: 8, padding: 10},
                        grid: { strokeWidth: 2, stroke: 'black' }
                    }}
                />
                <VictoryArea
                    interpolation='natural'
                    style={{ data: { fill: "red", stroke: "red", fillOpacity: 0.65 } }}
                    data={data}
                />
            </VictoryChart>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PriorReservationsChart);