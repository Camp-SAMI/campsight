import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Menu} from 'semantic-ui-react'

// const Navbar = ({handleClick, isLoggedIn}) => (
//   <div>
//     <nav>
//       {isLoggedIn ? (
//         <div>
//           {/* The navbar will show these links after you log in */}
//           <Link to="/home">Home</Link>
//           <a href="#" onClick={handleClick}>
//             Logout
//           </a>
//         </div>
//       ) : (
//         <div>
//           {/* The navbar will show these links before you log in */}
//           <Link to="/">Home</Link>
//           <Link to="/login">Login</Link>
//           <Link to="/signup">Sign Up</Link>
//           {/* <Amenities />
//           <Type /> */}
//           <Link to="/dashboard">Dashboard</Link>{' '}
//           {/* move to log in have we do the log in*/}
//           {/* <Amenities />
//           <Type /> */}
//         </div>
//       )}
//     </nav>
//     <hr />
//   </div>
// )

const Navbar = ({handleClick, isLoggedIn}) => (
  <Menu inverted attached="top" stackable style={{height: 60}}>
    {isLoggedIn ? (
      <React.Fragment>
        {/* The navbar will show these links after you log in */}
        <Menu.Item as={Link} to="/home">
          Home
        </Menu.Item>
        <Menu.Item as="a" to="#" onClick={handleClick}>
          Logout
        </Menu.Item>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Menu.Item as={Link} to="/dashboard">
          Dashboard
        </Menu.Item>
        <Menu.Menu position="right">
          {/* The navbar will show these links before you log in */}
          {/* <Menu.Item as={Link} to="/home">
          Home
        </Menu.Item> */}
        <Menu.Item as={Link} to='/TicketForm'>
        Guest Help Form</Menu.Item>
          <Menu.Item as={Link} to="/login">
            Login
          </Menu.Item>
          <Menu.Item as={Link} to="/signup">
            Sign Up
          </Menu.Item>
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
