import React, { Component, Fragment } from 'react';
import { getUnassignedTickets, getOpenTickets, getClosedTickets } from '../store';
import { fetchTickets, updateTicketToServer } from '../store/tickets';
import { fetchTicket } from '../store/ticket';
import { Divider, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import UnassignedTicketTable from './UnassignedTicketTable';
import OpenTicketTable from './OpenTicketTable';
import ClosedTicketTable from './ClosedTicketTable';

function mapStateToProps(state){
    const { tickets } = state;
    return {
        tickets: tickets,
        unassignedTickets: getUnassignedTickets(state),
        openTickets: getOpenTickets(state),
        closedTickets: getClosedTickets(state)
    }
}

const mapDispatchToProps = dispatch => ({
    fetchTickets: () => dispatch(fetchTickets()),
    updateTicket: (ticket) => dispatch(updateTicketToServer(ticket)),
    fetchTicket: (id) => dispatch(fetchTicket(id))
});

class TicketList extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.props.fetchTickets();
    }

    handleClick(ticket, e) {
        e.preventDefault();
        this.props.fetchTicket(ticket.id)
    }

    render() {
        const { tickets, unassignedTickets, openTickets, closedTickets } = this.props;
        return (
            <Fragment>
                <Divider hidden />
                <Header as="h1" floated="left">
                    All Tickets
                </Header>
                <Divider hidden />
                <UnassignedTicketTable unassignedTickets={unassignedTickets} handleClick={this.handleClick} />
                <Divider hidden />
                <OpenTicketTable openTickets={openTickets} handleClick={this.handleClick} />
                <Divider hidden />
                <ClosedTicketTable closedTickets={closedTickets} handleClick={this.handleClick} />
            </Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);