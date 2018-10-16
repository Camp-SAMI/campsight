import React from 'react'
import {Table, Header, Container, Divider} from 'semantic-ui-react'
import TicketRow from './TicketRow'
import {connect} from 'react-redux'

class TicketTable extends React.Component {
  render() {
    const {tickets, editSubmit, headerName} = this.props

    return (
      <Container>
        <Divider hidden />
        <Header as="h2" text-align="center">
          {headerName}
        </Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
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
            {tickets &&
              tickets.map(ticket => (
                <TicketRow
                  key={ticket.id}
                  ticket={ticket}
                  editSubmit={editSubmit}
                />
              ))}
          </Table.Body>
        </Table>
      </Container>
    )
  }
}

export default connect(null)(TicketTable)
