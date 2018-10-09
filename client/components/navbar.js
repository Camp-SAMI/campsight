import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Menu} from 'semantic-ui-react'

const Navbar = ({handleClick, isLoggedIn}) => (
  <Menu
    className="navBar"
    inverted
    attached="top"
    stackable
    style={{height: 60}}
  >
    {isLoggedIn ? (
      <React.Fragment>
        {/* The navbar will show these links after you log in */}
        <Menu.Item as={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/home">
          Dashboard
        </Menu.Item>
        <Menu.Item as="a" to="#" onClick={handleClick}>
          Logout
        </Menu.Item>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Menu.Item as={Link} to="/">
          Home
        </Menu.Item>

        <Menu.Menu position="right">
          {/* The navbar will show these links before you log in */}
          {/* <Menu.Item as={Link} to="/home">
          Home
        </Menu.Item> */}
          <Menu.Item as={Link} to="/TicketForm">
            Guest Help Form
          </Menu.Item>
          <Menu.Item as={Link} to="/login">
            Admin
          </Menu.Item>
          {/* <Menu.Item as={Link} to="/signup">
            Sign Up
          </Menu.Item> */}
        </Menu.Menu>
      </React.Fragment>
    )}
  </Menu>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
