import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { fetchCampsites } from '../store/campsites';
import { NavLink } from 'react-router-dom';
import { Pagination, Container, Table, Divider, Header } from 'semantic-ui-react';
import {formatPrice} from '../utils/formatPrice';
// import { deleteTicket } from '../store/tickets';

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
            currentPage: [],
            perPage: 15,
            activePage: 1,
            numPages: 0,
            isSearch: false
        }
        this.handleSelectPagination = this.handleSelectPagination.bind(this);
    }

    async componentDidMount() {
        if (this.props.fetchCampsites){
            await this.props.fetchCampsites();
            const campsites = this.props.campsites.sort((a,b) => a.id - b.id);
            const perPage = this.state.perPage;
            const firstPage = this.props.campsites.slice(0, perPage);
            const numPages = Math.ceil(this.props.campsites.length / perPage);
            this.setState({
                campsites: campsites,
                currentPage: firstPage,
                numPages: numPages
            })
        }
    }

    handleSelectPagination = (evt, {activePage}) => {
        const startIndex = (activePage - 1) * this.state.perPage;
        const endIndex = startIndex + this.state.perPage;
        const currentPage = this.state.campsites.slice(startIndex, endIndex);
        this.setState({currentPage: currentPage, activePage: activePage});
    }

    render() {
        if (
            this.props.campsites.length && this.state.currentPage.length && this.state.numPages
        ) {
            const campsites = this.props.campsites;
            const currentPage = this.state.currentPage;
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
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {
                                    currentPage && currentPage.map(campsite =>
                                        <Table.Row key={campsite.id}>
                                            <Table.Cell>{campsite.id}</Table.Cell>
                                            <Table.Cell>{campsite.name}</Table.Cell>
                                            <Table.Cell>{campsite.location.coordinates[0]}</Table.Cell>
                                            <Table.Cell>{campsite.location.coordinates[1]}</Table.Cell>
                                            <Table.Cell>{campsite.typing}</Table.Cell>
                                            <Table.Cell>{`${formatPrice(campsite.cost)}`}</Table.Cell>
                                        </Table.Row>
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