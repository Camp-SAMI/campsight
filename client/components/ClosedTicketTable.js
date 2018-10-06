import React from 'react';
import {NavLink} from 'react-router-dom';
import { Button, Table, Container, Header, Divider } from 'semantic-ui-react';

export default function ClosedTicketTable(props){
    const { closedTickets, handleClick } = props;

    return (
        <Container>
            <Divider hidden />
            <Header as="h2" floated="left">
                Open Tickets
            </Header>
            <Divider hidden />
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Priority</Table.HeaderCell>
                        <Table.HeaderCell>Created At</Table.HeaderCell>
                        <Table.HeaderCell>Updated At</Table.HeaderCell>
                        <Table.HeaderCell>Change Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    { closedTickets && closedTickets.map(ticket => (
                        <Table.Row key={ticket.id}>
                            <Table.Cell>
                                <NavLink to={`tickets/${ticket.id}`}>ticket.id</NavLink>
                            </Table.Cell>
                            <Table.Cell>
                                <NavLink to={`tickets/${ticket.id}`}>{ticket.title}</NavLink>
                            </Table.Cell>
                            <Table.Cell>{ticket.email}</Table.Cell>
                            <Table.Cell>{ticket.status}</Table.Cell>
                            <Table.Cell>{ticket.priority}</Table.Cell>
                            <Table.Cell>{ticket.createdAt}</Table.Cell>
                            <Table.Cell>{ticket.updatedAt}</Table.Cell>
                            <Table.Cell>
                                <Button.Group>
                                    <Button color="green" onClick={e => handleClick(ticket, e)}>Open</Button>
                                    <Button.Or />
                                    <Button color="blue" onClick={e => handleClick(ticket, e)}>In Progress</Button>
                                    <Button.Or />
                                    <Button color="red" onClick={e => handleClick(ticket, e)}>Close</Button>
                                </Button.Group>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </Container>
    )
}