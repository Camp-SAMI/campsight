import React, {Component} from 'react'
// import { fetchCampsites } from '../store/campsites';
import {fetchAmenities} from '../store/amenities'
import CampsiteBlock from './CampsiteBlock'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {Grid, Modal} from 'semantic-ui-react'
import CampsiteDetail from './CampsiteDetail'

// const mapStateToProps = state => {
//     return {
//         campsites: state.campsites,
//         amenities: state.amenities
//     }
// }

// const mapDispatchToProps = dispatch => ({
//     fetchAmenities: () => dispatch(fetchAmenities())
// });

//we probably want to have pagination here? For that reason, making it a stateful component makes sense
class CampsiteCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startTime: '',
      endTime: '',
      campsiteType: '',
      perPage: 6,
      currentPage: [],
      numPages: 0,
      searching: false,
      modalOpen: false
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
  }

  handleOpen() {
    this.setState({modalOpen: true})
  }

  handleClose() {
    this.setState({modalOpen: false})
  }

  componentDidMount() {
    const perPage = this.state.perPage
    const numPages = Math.ceil(this.props.campsites.length / perPage)
    this.setState({
      numPages: numPages
    })
  }

  render() {
    const campsites = this.props.campsites
    const currentPage = this.state.currentPage
    const isSearch = this.state.isSearch
    const amenities = this.state.amenities
    if (this.props.campsites.length && this.state.currentPage) {
      return (
        <Grid>
          {this.props.campsites.map(campsite => (
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
                // open={this.state.modalOpen}
                // onClose={this.handleClose}
              >
                <Modal.Content>
                  <CampsiteDetail id={campsite.id} />
                </Modal.Content>
              </Modal>
            </Grid.Column>
          ))}
        </Grid>
      )
    } else {
      return <h3>There are no campsites currently available</h3>
    }
  }
}

export default CampsiteCollection
