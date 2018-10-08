import {format} from 'date-fns'
import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Link, NavLink, withRouter} from 'react-router-dom'
import {Container, Grid, Table, Header, Divider, Tab} from 'semantic-ui-react'
// import Reservations from './Reservations'
// import Tickets from './Tickets'
import {fetchCamper, editCamper} from '../store/camper'

class CamperProfile extends Component {
  componentDidMount = () => {
    this.props.fetchCamper(
      Number(this.props.match.params.camperId) || this.props.camperId
    )
  }

  render() {
    const {firstName, lastName, email, reservations} = this.props.camper
    return (
      <Fragment>
        <Container>
          <Divider hidden />
          <Header as="h1">{`${firstName} ${lastName}`}</Header>
          <Divider hidden />
          <Grid.Column>
            <Table>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>First Name:</Table.Cell>
                  <Table.Cell>{firstName}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Last Name:</Table.Cell>
                  <Table.Cell>{lastName}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Email:</Table.Cell>
                  <Table.Cell>{email}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
          <Divider hidden />
          <Tab panes={panes} renderActiveOnly={false} />
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  camper: state.camper
})

const mapDispatchToProps = dispatch => ({
  fetchCamper: camperId => dispatch(fetchCamper(camperId)),
  editCamper: camperObj => dispatch(editCamper(camperObj))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CamperProfile)
)
