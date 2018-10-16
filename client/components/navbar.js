import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {
  Menu,
  Dropdown,
  Responsive,
  // Button,
  Segment,
  // Icon
} from 'semantic-ui-react'

// const DropdownExampleDivider = () => (
//   <Dropdown
//     text="Menu"
//     icon="align justify"
//     floating
//     labeled
//     button
//     className="icon"
//   >
//     <Dropdown.Menu>
//       <Dropdown.Header icon="tags" content="Filter by tag" />
//       <Dropdown.Divider />
//       <Dropdown.Item>Important</Dropdown.Item>
//       <Dropdown.Item>Announcement</Dropdown.Item>
//       <Dropdown.Item>Discussion</Dropdown.Item>
//     </Dropdown.Menu>
//   </Dropdown>
// )

const Navbar = ({handleClick, isLoggedIn}) => (
  <Menu
    className="navBar"
    inverted
    color="teal"
    attached="top"
    stackable
    style={{height: 65}}
  >
    {isLoggedIn ? (
      <React.Fragment>
        <Segment.Group>
          <Responsive as={Segment} {...Responsive.onlyMobile}>
            <Menu
              style={{
                margin: -20,
                padding: 0,
                backgroundColor: 'black',
                color: 'white'
              }}
            >
              <Dropdown className="link item" text="Menu" simple item>
                <Dropdown.Menu
                  style={{backgroundColor: '#1cb5ac', color: 'white'}}
                >
                  <Dropdown.Item
                    style={{backgroundColor: '#1cb5ac', color: 'white'}}
                  >
                    <Link to="/">Home</Link>
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{backgroundColor: '#1cb5ac', color: 'white'}}
                  >
                    <Link to="/TicketForm">Guest Help Form</Link>
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{backgroundColor: '#1cb5ac', color: 'white'}}
                  >
                    <Link to="/home">Dashboard</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
          </Responsive>
        </Segment.Group>
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
        <Segment.Group>
          <Responsive as={Segment} {...Responsive.onlyMobile}>
            <Menu
              style={{
                margin: -20,
                padding: 0,
                backgroundColor: '#1cb5ac',
                color: 'white'
              }}
            >
              <Dropdown className="link item" text="Menu" simple item>
                <Dropdown.Menu
                  style={{backgroundColor: '#1cb5ac', color: 'white'}}
                >
                  <Dropdown.Item
                    style={{backgroundColor: '#1cb5ac', color: 'white'}}
                  >
                    <Link to="/">Home</Link>
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{backgroundColor: '#1cb5ac', color: 'white'}}
                  >
                    <Link to="/TicketForm">Guest Help Form</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
          </Responsive>
        </Segment.Group>
        {/* <Segment.Group> */}
         {/* <Responsive as={Segment} {...Responsive.onlyComputer}> */}
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
      {/* </Responsive> */}
      {/* </Segment.Group> */}
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
