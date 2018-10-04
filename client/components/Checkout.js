import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import Button from '@material-ui/core/Button'
import {withRouter} from 'react-router-dom'

class Checkout extends React.Component {
  onToken = async (token, address) => {
    // Calculate the total cost of camping
    
    // Call Axios ...
    try {
      const res = await axios.post(`/api/reservations`, {
        campsiteId: this.props.id,
        startTime: this.state.selectedStartDate,
        endTime: this.state.selectedEndDate,
        partyNumber: this.state.partyNumber,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        address: address,
        shippingCost: this.props.shipping,
        totalCost: this.props.total,
        token: JSON.stringify(token)
      })
      // Use an alert module ...
      console.log('Returned after creating an Order backend', res.data)
      alert('Please check your email for Order confirmation')
      // call confirm order
      this.props.confirmOrder(this.props.user.id, this.props.cart, {
        ...this.state,
        shippingCost: this.props.shipping,
        totalCost: this.props.total
      })
      this.props.history.push(`/users/${res.data.userId}/orders/${res.data.id}`)
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
        amount={this.props.total} // cents
        currency="USD"
        stripeKey="pk_test_E0MMENnIPp3UuKcEwdSvVuZ4"
        locale="en"
        email="dimsquad@dimsquadll.com"
        // Note: Enabling either address option will give the user the ability to
        // fill out both. Addresses are sent as a second parameter in the token callback.
        shippingAddress={true}
        billingAddress={true}
        // Note: enabling both zipCode checks and billing or shipping address will
        // cause zipCheck to be pulled from billing address (set to shipping if none provided).
        zipCode={true}
        // alipay // accept Alipay (default false)
        // bitcoin // accept Bitcoins (default false)
        //allowRememberMe // "Remember Me" option (default true)
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
        <Button variant="contained" color="primary">
          Reserve
        </Button>
      </StripeCheckout>
    )
  }
}

export default withRouter(Checkout)
