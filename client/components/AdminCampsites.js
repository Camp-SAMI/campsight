import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchCampsites } from '../store/campsites';
import { NavLink } from 'react-router-dom';
import { Pagination, Grid, Container, List } from 'semantic-ui-react';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        campsite: state.campsite,
        user: state.user
    }
};

const mapDispatchToProps = dispatch => ({
    fetchCampsites: () => dispatch(fetchCampsites())
})

export class AdminCampsites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: [],
            perPage: 9,
            numPages: 0
        }
    }

    componentDidMount() {
        this.props.fetchCampsites();
        const campsites = this.props.campsites;
        const perPage = this.state.perPage;
        const firstPage = this.props.campsites.slice(0, perPage);
        const numPages = Math.ceil(this.props.campsites.length / perPage);
        this.setState({
            campsites: campsites,
            currentPage: firstPage,
            numPages: numPages
        })
    }

    handleSelectPagination = (evt, {activePage}) => {

    }

    render() {
        if (
            this.props.campsites.length && this.state.currentPage.length && this.state.numPages && this.props.user
        ) {
            const campsites = this.props.campsites;
            const currentPage = this.state.currentPage;
            const data = [...this.props.campsites];

            return (
                <div>
                    
                </div>
            )
        } else
            return (
                <h3>
                    Sorry, you are not authorized to view this page.
                </h3>
            )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminCampsites);