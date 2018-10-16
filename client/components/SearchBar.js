import React, {Component, Fragment} from 'react'
import {Form, Icon, Menu} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchReservations, getFilteredReservations} from '../store/reservations'

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      activeItem: 'all'
    }
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  camelCase = strValue => strValue[0].toLowerCase() + strValue.slice(1)

  replaceAll = (value, search, replacement) =>
    value.split(search).join(replacement)

  handleAllItemsClick = (e, {name}) => {
    this.setState({activeItem: name})
    this.props.fetcher();
  }

  handleSearchSubmit (e) {
    this.props.fetcher(this.state.searchTerm);
  }

  render() {
    // console.log('searchBarProps', this.props.fetcher);
    const {activeItem} = this.state.activeItem
    return (
      <Fragment>
        <Menu pointing secondary position="left">
          <Menu.Item
            name="all"
            active={activeItem === 'all'}
            onClick={this.handleAllItemsClick}
          />
          <Menu.Item position="right">
            <Form
              style={styles.searchBar}
              width="equal"
              onSubmit={this.handleSearchSubmit}
            >
              <Form.Group style={styles.searchBar}>
                <Form.Field>
                  <input
                    label="Search:"
                    placeholder="Email: admin@campsight.com"
                    name="search"
                    value={this.state.searchTerm}
                    onChange={e =>
                      this.setState({searchTerm: e.currentTarget.value})
                    }
                  />
                </Form.Field>
                <Form.Button type="submit" disabled={!this.state.searchTerm}>
                  <Icon name="search" />
                </Form.Button>
              </Form.Group>
            </Form>
          </Menu.Item>
        </Menu>
      </Fragment>
    )
  }
}

const styles = {
  searchBar: {
    margin: 0,
    padding: 0
  }
}

// const mapDispatchToProps = dispatch => ({
//   fetchEntityList: () => dispatch(fetchReservations()),
//   fetchEntityListSearch: (columnName, columnSearchValue) =>
//     dispatch(getFilteredReservations(columnName, columnSearchValue))
// })

export default withRouter(connect(null)(SearchBar))
