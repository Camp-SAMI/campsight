import React from 'react'
import {Table, Button} from 'semantic-ui-react'

const ReservationRow = props => {
  const {reservation} = props
  return (
    <Table.Row key={reservation.id}>
      <Table.Cell>{reservation.id}</Table.Cell>
      <Table.Cell>{reservation.startTime}</Table.Cell>
      <Table.Cell>{reservation.endTime}</Table.Cell>
      <Table.Cell>{reservation.partyNumber}</Table.Cell>
      <Table.Cell>
        <Button.Group>
          <Button color="purple">Edit</Button>
          <Button.Or />
          <Button color="red">Delete</Button>
        </Button.Group>
      </Table.Cell>
    </Table.Row>
  )
}

export default ReservationRow
