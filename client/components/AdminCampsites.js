import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { fetchCampsites, updateCampsiteToServer, addNewCampsiteToServer } from '../store/campsites';
import { fetchAmenities } from '../store/amenities';
import { NavLink } from 'react-router-dom';
import { Pagination, Container, Table, Divider, Header, Button } from 'semantic-ui-react';
import {formatPrice} from '../utils/formatPrice';
import locationConverter from '../utils/locationConverter';
import CampsiteRow from './CampsiteRow';

const mapStateToProps = state => {
    const campsites = state.campsites.sort((a,b) => a.id - b.id);
    return {
        campsites: campsites,
        campsite: state.campsite,
        user: state.user,
        amenities: state.amenities
    }
};

const mapDispatchToProps = dispatch => ({
    fetchCampsites: () => dispatch(fetchCampsites()),
    // fetchAmenities: () => dispatch(fetchAmenities()),
    updateCampsite: campsite => dispatch(updateCampsiteToServer(campsite)),
    addCampsite: campsite => dispatch(addNewCampsiteToServer(campsite))
})

export class AdminCampsites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // campsites: [],
            // currentPage: [],
            perPage: 15,
            activePage: 1,
            numPages: 0,
            isSearch: false
        }
        this.handleSelectPagination = this.handleSelectPagination.bind(this);
        this.editSubmit = this.editSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.fetchCampsites){
            await this.props.fetchCampsites();
            const perPage = this.state.perPage;
            const numPages = Math.ceil(this.props.campsites.length / perPage);
            // await this.props.fetchAmenities();
            this.setState({
                // campsites: campsites,
                // currentPage: firstPage,
                numPages: numPages
            })
        }
    }

    handleSelectPagination = (evt, {activePage}) => {
        // const currentPage = this.props.campsites.slice(startIndex, endIndex);
        this.setState({activePage: activePage});
    }

    editSubmit(campsiteInfo, event) {
        // event.preventDefault();
        let campsite = {
            id: campsiteInfo.id,
            name: campsiteInfo.name,
            latitude: campsiteInfo.latitude,
            longitude: campsiteInfo.longitude,
            // location: locationConverter(campsiteInfo.latitude, campsiteInfo.latitude),
            coverImage: campsiteInfo.coverImage,
            images: campsiteInfo.images,
            amenities: campsiteInfo.amenities,
            typing: campsiteInfo.typing,
            desc: campsiteInfo.desc,
            cost: campsiteInfo.cost
        };
        this.props.updateCampsite(campsite);
    }

    render() {
        if (
            this.props.campsites.length && this.state.numPages
        ) {
            const campsites = this.props.campsites;
            // const amenities = this.props.amenities;
            const startIndex = (this.state.activePage - 1) * this.state.perPage;
            const endIndex = startIndex + this.state.perPage;
            const currentPage = campsites.slice(startIndex, endIndex);
            const data = [...this.props.campsites];

            return (
                <Fragment>
                    <Container>
                        <Divider hidden />
                        <Header as="h1" floated="left">
                            All Campsites:
                        </Header>
                        <Divider hidden />
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>ID</Table.HeaderCell>
                                    <Table.HeaderCell>Name</Table.HeaderCell>
                                    <Table.HeaderCell>Latitude</Table.HeaderCell>
                                    <Table.HeaderCell>Longitude</Table.HeaderCell>
                                    <Table.HeaderCell>Type</Table.HeaderCell>
                                    <Table.HeaderCell>Cost</Table.HeaderCell>
                                    <Table.HeaderCell>Actions</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {
                                    currentPage && currentPage.map(campsite =>
                                        <CampsiteRow key={campsite.id} campsite={campsite} editSubmit={this.editSubmit} />
                                    )
                                }
                            </Table.Body>
                        </Table>
                    </Container>
                    <Pagination
                        activePage={this.state.activePage}
                        size="mini"
                        boundaryRange={1}
                        siblingRange={1}
                        onPageChange={this.handleSelectPagination}
                        totalPages={this.state.numPages}
                    />
                    <Button basic color="blue"><NavLink to='/campsites/add'>Add New Campsite</NavLink></Button>
                </Fragment>
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