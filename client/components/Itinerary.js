import React from 'react'
import {NavLink} from 'react-router-dom'
import {Container, Divider, Message} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {format} from 'date-fns'

const Itinerary = props => {
  return (
    <Container>
      <Divider hidden />
      <Message positive>
        <Message.Header>
          <h1>Congratulations, {props.itinerary.firstName || ''} </h1>
        </Message.Header>
        <Divider hidden />
        <div>
          <h3>Your reservation was successful.</h3>
          <p>{`Your camping experience starts on ${format(
            props.itinerary.startTime,
            'MM/dd/yyyy'
          )} and ends on ${format(props.itinerary.endTime, 'MM/dd/yyy')}`}</p>
          <p>Please check your email for confirmation</p>
        </div>
        <p>
          Would you like to checkout other&nbsp;
          <NavLink to="/">
            <strong>
              <em>Campsites</em>
            </strong>?
          </NavLink>
        </p>
      </Message>
    </Container>
  )
}

const mapStateToProps = state => ({
  itinerary: state.itinerary
})
export default connect(mapStateToProps)(Itinerary)

// export default Itinerary
