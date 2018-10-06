import {Image, Table, Button} from 'semantic-ui-react'
import React from 'react'
import {NavLink} from 'react-router-dom'

const CamperRow = props => {
  const {camper} = props
  return (
    <Table.Row key={camper.id}>
      <Table.Cell>
        <NavLink to={`campers/${camper.id}`}>{camper.id}</NavLink>
      </Table.Cell>
      <Table.Cell>{camper.firstName}</Table.Cell>
      <Table.Cell>{camper.lastName}</Table.Cell>
      <Table.Cell>
        <NavLink to={`campers/${camper.id}`}>{camper.email}</NavLink>
      </Table.Cell>
      <Table.Cell>{camper.updatedAt}</Table.Cell>
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

export default CamperRow
