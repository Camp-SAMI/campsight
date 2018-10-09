import React from 'react'
import {Container} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {format} from 'date-fns'

const Itinerary = props => {
  console.log('ITINERARY OBJECT', props)
  return (
    <Container>
      <h1>Your reservation was successful</h1>
      <h3>{`Your camping experience is starting on ${format(
        props.itinerary.startTime,
        'MM/dd/yyyy'
      )}`}</h3>
      <h3>Please check your email for confirmation</h3>
    </Container>
  )
}

const mapStateToProps = state => ({
  itinerary: state.itinerary
})
export default connect(mapStateToProps)(Itinerary)

// export default Itinerary
