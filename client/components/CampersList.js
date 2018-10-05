import {Table, Divider, Container, Header} from 'semantic-ui-react'
import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {fetchCampers} from '../store/campers'
import CamperRow from './CamperRow'

class CampersList extends Component {
  componentDidMount() {
    this.props.fetchCampers()
  }

  render() {
    const campers = this.props.campers
    return (
      <Fragment>
        <Container>
          <Divider hidden />
          <Header as="h1" floated="left">
            All Campers:
          </Header>
          <Divider hidden />
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Last Update</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {
                campers && campers.map(camper =>(
                  <CamperRow
                  key={camper.id}
                  camper={camper}
                  />
                ))
              }
            </Table.Body>
          </Table>
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  campers: state.campers
})

const mapDispatchToProps = dispatch => ({
  fetchCampers: () => dispatch(fetchCampers())
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CampersList)
)
