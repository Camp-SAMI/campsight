import React, {Component, Fragment} from 'react'
import {Form, Icon, Menu} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchReservations, getFilteredReservations} from '../store/reservations'

class SearchBar extends Component {
  state = {
    searchTerm: '',
    activeItem: 'all'
  }

  camelCase = strValue => strValue[0].toLowerCase() + strValue.slice(1)

  replaceAll = (value, search, replacement) =>
    value.split(search).join(replacement)

  handleAllItemsClick = (e, {name}) => {
    this.setState({activeItem: name})
    this.props.fetchEntityList()
  }

  handleSearchSubmit = e => {
    const searchArr = this.state.searchTerm.split(':')
    const columnName = this.camelCase(
      searchArr[0]
        .split(' ')
        .join('')
        .trim()
    )
    let columnSearchValue = searchArr[1].trim()
    if (columnName === 'startTime' || columnName === 'endTime') {
      columnSearchValue = new Date(columnSearchValue).toISOString()
      // columnSearchValue = this.replaceAll(columnSearchValue, '/', '-')
      // columnSearchValue = format(new Date(columnSearchValue), 'YYYY/MM/DD')
    }
    // console.log(
    //   'Column Name =>',
    //   columnName,
    //   'Column Search Value =>',
    //   columnSearchValue
    // )
    this.props.fetchEntityListSearch(columnName, columnSearchValue)
  }

  render() {
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

const mapDispatchToProps = dispatch => ({
  fetchEntityList: () => dispatch(fetchReservations()),
  fetchEntityListSearch: (columnName, columnSearchValue) =>
    dispatch(getFilteredReservations(columnName, columnSearchValue))
})

export default withRouter(connect(null, mapDispatchToProps)(SearchBar))
