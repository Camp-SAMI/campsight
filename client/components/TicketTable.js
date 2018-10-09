import React from 'react'
import {Table} from 'semantic-ui-react'
import TicketRow from './TicketRow'
import {connect} from 'react-redux'

class TicketTable extends React.Component {
  render() {
    const {tickets, editSubmit} = this.props

    return (
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
    )
  }
}

export default connect(null)(TicketTable)
