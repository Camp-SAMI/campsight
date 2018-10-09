import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampsites } from '../store/campsites';
import { VictoryPie } from 'victory';
import getCampsiteTypeData from '../utils/getCampsiteTypeData';

const mapStateToProps = state => {
    return {
        campsites: state.campsites
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCampsites: () => dispatch(fetchCampsites())
});

class CampsiteTypeChart extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    async componentDidMount(){
        await this.props.fetchCampsites();
        const typingData = getCampsiteTypeData(this.props.campsites);
        this.setState({
            data: typingData
        });
    }

    render() {
        const { data } = this.state;
        if (data.length < 1) return (<h3>Loading...</h3>)
        return (
            <VictoryPie
                colorScale={["gold", "cyan", "navy" ]}
                data={data}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampsiteTypeChart);