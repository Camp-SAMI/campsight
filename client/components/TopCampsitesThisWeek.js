import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchCampsites } from '../store/campsites';
import { getTopCampsitesThisWeek } from '../utils/getTopCampsitesWeek';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import { Header, Container } from 'semantic-ui-react'

const mapStateToProps = state => {
    return {
        campsites: state.campsites
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCampsites: () => dispatch(fetchCampsites())
});

class TopCampsitesThisWeek extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    async componentDidMount(){
        await this.props.fetchCampsites();
        const topTen = getTopCampsitesThisWeek(this.props.campsites).sort(function(a, b) {
            return a.reservation_count - b.reservation_count
        });
        this.setState({
            data: topTen
        });
    }

    render() {
        const { data } = this.state;
        if (data.length < 1) return (<h3>Loading...</h3>)
        let campsiteNames = data.map(d => d.campsite);
        return (
            <Container>
                <Header>Top Ten Most Popular Campsites This Week</Header>
                <VictoryChart domainPadding={{x: [40, 0]}} 
                    animate={{duration: 500}}>
                    <VictoryAxis
                        tickValues={[0,1,2,3,4,5,6,7,8,9]}
                        tickFormat={campsiteNames}
                    />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(x) => x}
                    />
                    <VictoryBar
                        alignment="start"
                        data={data}
                        x="campsites"
                        y="reservation_count"
                    />
                </VictoryChart>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopCampsitesThisWeek);