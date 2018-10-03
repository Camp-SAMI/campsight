import {Container, Tab, List, Divider, Table, Header} from 'semantic-ui-react'
import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {fetchCampsite} from '../store/campsite'

class CampsiteDetail extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <p>This probably a terrible idea.</p>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  campsite: state.campsite
})

const mapDispatchToProps = dispatch => ({
  fetchCampsite: campsiteId => dispatch(fetchCampsite(campsiteId))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CampsiteDetail)
)
