import {Table} from 'semantic-ui-react'
import React from 'react'
import {NavLink} from 'react-router-dom'
import {format} from 'date-fns'

const CamperRow = props => {
  const {camper} = props
  return (
    <Table.Row key={camper.id}>
      <Table.Cell>
        <NavLink to={`/campers/${camper.id}`}>{camper.id}</NavLink>
      </Table.Cell>
      <Table.Cell>{camper.firstName}</Table.Cell>
      <Table.Cell>{camper.lastName}</Table.Cell>
      <Table.Cell>
        <NavLink to={`/campers/${camper.id}`}>{camper.email}</NavLink>
      </Table.Cell>
      <Table.Cell>{format(camper.updatedAt, 'MM/dd/yyyy')}</Table.Cell>
    </Table.Row>
  )
}

export default CamperRow
