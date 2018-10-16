import React, {Component, Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Form, Icon, Dropdown} from 'semantic-ui-react'

//feed in a collection of all items of some type, and return a filtered list of those items.
//searchParams.split(','); categories = searchParams.split(,).split(:)

class SearchBar extends Component {
  state = {
    criterion: '',
    searchTerm: ''
  }


  render() {
    return (
      <Fragment>
        
      </Fragment>
    )
  }
}
