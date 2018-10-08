import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCampsite } from '../store/campsite';
import { Container, Divider, Header, Grid, Image, List } from 'semantic-ui-react';

function mapStateToProps(state) {
    return {
        campsite: state.campsite,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCampsite: id => dispatch(fetchCampsite(id))
    }
}

class AdminSingleCampsite extends Component {
    componentDidMount() {
        const campsiteId = Number(this.props.match.params.id);
        this.props.fetchCampsite(campsiteId);
    }

    render() {
        const { campsite, user } = this.props;
        return (
            <Fragment>

            </Fragment>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminSingleCampsite));