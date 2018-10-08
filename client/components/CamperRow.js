import {Table, Button} from 'semantic-ui-react'
import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {format} from 'date-fns'
import {fetchCamper} from '../store/camper'

const CamperRow = props => {
  const handleClick = id => {
    console.log('I do not understand what the eff is going on.')
    props.fetchCamper(id)
  }
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
      <Table.Cell>
        <Button color="purple" onClick={() => handleClick(camper.id)}>
          Edit
        </Button>
      </Table.Cell>
    </Table.Row>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchCamper: id => dispatch(fetchCamper(id))
})

export default withRouter(connect(null, mapDispatchToProps)(CamperRow))
