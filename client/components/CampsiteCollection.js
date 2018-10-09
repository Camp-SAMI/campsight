import React, {Component} from 'react'
import JwPagination from 'jw-react-pagination'
import {Grid, Modal} from 'semantic-ui-react'
import CampsiteBlock from './CampsiteBlock'
import CampsiteDetail from './CampsiteDetail'

//we probably want to have pagination here? For that reason, making it a stateful component makes sense

const customLabels = {
  first: '<<',
  last: '>>',
  previous: '<',
  next: '>'
}

class CampsiteCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageOfItems: []
    }

    this.onChangePage = this.onChangePage.bind(this)
  }

  onChangePage(pageOfItems) {
    this.setState({pageOfItems})
  }

  render() {
    if (this.state.pageOfItems) {
      return (
        <Grid>
          {this.state.pageOfItems.map(campsite => (
            <Grid.Column key={campsite.id} width={8}>
              <Modal
                trigger={
                  <div>
                    <CampsiteBlock
                      campsite={campsite}
                      onClick={this.handleOpen}
                    />
                  </div>
                }
              >
                <Modal.Content>
                  <CampsiteDetail
                    id={campsite.id}
                    filteredStartTime={this.props.filteredStartTime}
                    filteredEndTime={this.props.filteredEndTime}
                  />
                </Modal.Content>
              </Modal>
            </Grid.Column>
          ))}
          <JwPagination
            items={this.props.campsites || this.props.filteredCampsites}
            onChangePage={this.onChangePage}
            pageSize={6}
            labels={customLabels}
          />
        </Grid>
      )
    } else {
      return <h3>There are no campsites currently available</h3>
    }
  }
}

export default CampsiteCollection
