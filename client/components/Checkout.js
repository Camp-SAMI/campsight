import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import Button from '@material-ui/core/Button'
import {withRouter} from 'react-router-dom'
// import {differenceInCalendarDays} from 'date-fns'
import {gotItinerary} from '../store/itinerary'
import {connect} from 'react-redux'

class Checkout extends React.Component {
  state = {
    reserved: false
  }

  onToken = async (token, address) => {
    try {
      const res = await axios.post(`/api/reservations`, {
        campsiteId: this.props.campsiteId,
        startTime: this.props.startTime,
        endTime: this.props.endTime,
        partyNumber: this.props.partyNumber,
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        email: this.props.email,
        address: address,
        totalCost: this.props.totalCost,
        token: JSON.stringify(token)
      })
      // Use an alert module ...
      console.log('Returned after making a Reservation backend', res.data)
      // alert('Please check your email for Order confirmation')

      // Add first name to returned data
      res.data.firstName = this.props.firstName

      // pass stuff to Itinerary
      this.props.gotItinerary(res.data)

      this.props.history.push(`/itinerary`)
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return (
      <StripeCheckout
        name="SAMI LLC" // the pop-in header title
        description="Campsight Checkout" // the pop-in header subtitle
        image="https://react.semantic-ui.com/images/avatar/large/matthew.png" // the pop-in header image (default none)
        ComponentClass="div"
        panelLabel="Checkout" // prepended to the amount in the bottom pay button
        amount={this.props.totalCost} // cents
        currency="USD"
        stripeKey="pk_test_E0MMENnIPp3UuKcEwdSvVuZ4"
        locale="en"
        email={this.props.email || 'campsight@samillc.com'}
        // Note: Enabling either address option will give the user the ability to
        // fill out both. Addresses are sent as a second parameter in the token callback.
        // shippingAddress={true}
        billingAddress={true}
        // Note: enabling both zipCode checks and billing or shipping address will
        // cause zipCheck to be pulled from billing address (set to shipping if none provided).
        zipCode={true}
        // alipay // accept Alipay (default false)
        // bitcoin // accept Bitcoins (default false)
        allowRememberMe={false} // "Remember Me" option (default true)
        token={this.onToken} // submit callback
        opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
        closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
        // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
        // you are using multiple stripe keys
        // reconfigureOnUpdate={false}
        // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
        // useful if you're using React-Tap-Event-Plugin
        // triggerEvent="onTouchTap"
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: '#1cb5ac',color:'white'
          }}
          size="large"
          fullWidth
          disabled={this.state.reserved}
        >
          Reserve
        </Button>
      </StripeCheckout>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  gotItinerary: itinerary => dispatch(gotItinerary(itinerary))
})
export default connect(null, mapDispatchToProps)(withRouter(Checkout))
