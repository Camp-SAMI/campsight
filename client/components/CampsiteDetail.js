import {
  Container,
  Grid,
  List,
  Divider,
  Image,
  Header,
  Segment
} from 'semantic-ui-react'
import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
// import {withRouter} from 'react-router-dom'

import {fetchCampsite} from '../store/campsite'
import ReservationForm from './ReservationForm'
import {formatPrice} from '../utils/formatPrice'
import {chooseAmenityIcon} from '../utils/amenitiesIconChoser'
// import {fetchLatestCampsiteReservation} from '../store/reservation'

class CampsiteDetail extends Component {
  componentDidMount() {
    this.props.fetchCampsite(
      Number(this.props.id || this.props.match.params.id)
      // this.props.id
    )
  }

  render() {
    const {
      name,
      coverImage,
      images,
      desc,
      amenities,
      cost
    } = this.props.campsite

    if (name && coverImage && images && desc && amenities && cost) {
      return (
        <Fragment>
          <Container>
            <Divider hidden />
            <Segment clearing>
              <Header as="h1" floated="left">
                {`Welcome to CAMPSIGHT-${name && name}`}
              </Header>
              <Header as="h2" floated="right">{`${formatPrice(
                cost && cost
              )}/DAY`}</Header>
            </Segment>
            <Divider hidden />
            <Grid stackable columns={2}>
              <Grid.Column>
                <Fragment>
                  <Image size="huge" src={coverImage} />
                  <Divider hidden />
                  <Header as="h2">
                    Description
                    <Header.Subheader>{desc}</Header.Subheader>
                  </Header>
                  <Divider hidden />
                  <Header as="h2">Amenities on Site</Header>
                  <List divided relaxed>
                    {amenities && amenities.length ? (
                      amenities.map(amenity => (
                        <List.Item key={amenity.category}>
                          <List.Icon
                            name={chooseAmenityIcon(
                              amenity.category.toLowerCase()
                            )}
                            size="large"
                            verticalAlign="middle"
                          />
                          <List.Content>
                            <List.Header as="h4">
                              {amenity.category}
                            </List.Header>
                          </List.Content>
                        </List.Item>
                      ))
                    ) : (
                      <Fragment>
                        <List.Item>
                          <List.Icon
                            name="bathtub"
                            size="large"
                            verticalAlign="middle"
                          />
                          <List.Content>
                            <List.Header as="h4">Bathroom</List.Header>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon
                            name="wifi"
                            size="large"
                            verticalAlign="middle"
                          />
                          <List.Content>
                            <List.Header as="h4">Wi-Fi</List.Header>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon
                            name="power cord"
                            size="large"
                            verticalAlign="middle"
                          />
                          <List.Content>
                            <List.Header as="h4">Electricity</List.Header>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon
                            name="cuttlefish"
                            size="large"
                            verticalAlign="middle"
                          />
                          <List.Content>
                            <List.Header as="h4">Fishing</List.Header>
                          </List.Content>
                        </List.Item>
                      </Fragment>
                    )}
                  </List>
                </Fragment>
              </Grid.Column>
              <Grid.Column>
                <Fragment>
                  <Image.Group size="small">
                    {images && images.length ? (
                      images.map(image => <Image key={image} src={image} />)
                    ) : (
                      <Fragment>
                        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                        {/* <Image src="https://react.semantic-ui.com/images/wireframe/image.png" /> */}
                        {/* <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                      <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                      <Image src="https://react.semantic-ui.com/images/wireframe/image.png" /> */}
                      </Fragment>
                    )}
                  </Image.Group>
                  <Divider hidden />
                  <Fragment>
                    <Header as="h2">Reserve Campsite</Header>
                    <ReservationForm
                      id={Number(this.props.id || this.props.match.params.id)}
                      cost={cost}
                      filteredStartTime={this.props.filteredStartTime}
                      filteredEndTime={this.props.filteredEndTime}
                    />
                  </Fragment>
                </Fragment>
              </Grid.Column>
            </Grid>
            <Divider hidden />
          </Container>
        </Fragment>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = state => ({
  campsite: state.campsite
})

const mapDispatchToProps = dispatch => ({
  fetchCampsite: campsiteId => dispatch(fetchCampsite(campsiteId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CampsiteDetail)
