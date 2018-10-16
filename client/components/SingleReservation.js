import React, {Component, Fragment} from 'react'
import {Form, Segment, Button} from 'semantic-ui-react'
import {format} from 'date-fns'

class SingleReservation extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
  }
  render() {
    const {reservation} = this.props
    return (
      <Fragment>
        <Segment inverted>
          <Form inverted>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Start Date"
                defaultValue={format(reservation.startTime, 'MM/dd/yyyy')}
              />
              <Form.Input
                fluid
                label="End Date"
                defaultValue={format(reservation.endTime, 'MM/dd/yyyy')}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="First Name"
                defaultValue={reservation.camper.firstName}
              />
              <Form.Input
                fluid
                label="Last Name"
                defaultValue={reservation.camper.lastName}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Email"
                defaultValue={reservation.camper.email}
              />
              <Form.Input
                fluid
                label="Campers"
                defaultValue={reservation.partyNumber}
              />
            </Form.Group>
            <Button type="submit" basic color="green">
              Update
            </Button>
          </Form>
        </Segment>
      </Fragment>
    )
  }
}

export default SingleReservation
