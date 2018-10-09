import React, { Component } from 'react';
import { Table, Button, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchTicket } from '../store/ticket';
import EditTicket from './EditTicket';

const mapDispatchToProps = dispatch => ({
    fetchTicket: id => dispatch(fetchTicket(id))
});

class TicketRow extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick(id) {
        await this.props.fetchTicket(id);
        console.log('id', id);
    }

    render() {
        const {ticket, editSubmit} = this.props;
        console.log('ticket', ticket);
        return (
            <Table.Row>
                <Table.Cell>{ticket.id}</Table.Cell>
                <Table.Cell>{ticket.title}</Table.Cell>
                <Table.Cell>{ticket.email}</Table.Cell>
                <Table.Cell>{ticket.status}</Table.Cell>
                <Table.Cell>{ticket.priority}</Table.Cell>
                <Table.Cell>{ticket.createdAt}</Table.Cell>
                <Table.Cell>{ticket.updatedAt}</Table.Cell>
                <Table.Cell>
                    <Modal
                        trigger={
                            <Button
                                basic
                                color="blue"
                                value={ticket.id}
                                onClick={() => this.handleClick(ticket.id)}
                            >Edit</Button>
                        }
                    >
                        <Modal.Content>
                            <EditTicket ticket={ticket} editSubmit={editSubmit} />
                        </Modal.Content>
                    </Modal>
                </Table.Cell>
            </Table.Row>
        )
    }
}

export default connect(null, mapDispatchToProps)(TicketRow);