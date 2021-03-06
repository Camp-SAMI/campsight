import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCampsites} from '../store/campsites'
import {VictoryPie} from 'victory'
import getCampsiteTypeData from '../utils/getCampsiteTypeData'
import {Header, Container} from 'semantic-ui-react'

const mapStateToProps = state => {
  return {
    campsites: state.campsites
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCampsites: () => dispatch(fetchCampsites())
})

class CampsiteTypeChart extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  async componentDidMount() {
    await this.props.fetchCampsites()
    const typingData = getCampsiteTypeData(this.props.campsites)
    this.setState({
      data: typingData
    })
  }

  render() {
    const {data} = this.state
    if (data.length < 1) return <h3>Loading...</h3>
    return (
      <Container>
        <Header>Campsite Types Reserved This Week</Header>
        <VictoryPie
          animate={{
            duration: 90,
            onLoad: {
              duration: 900,
              before: () => ({_y: -1200, label: ' '}),
              after: datum => ({_y: datum._y})
            }
          }}
          padAngle={2}
          innerRadius={100}
          colorScale={['#1cb5ac', 'cyan', 'navy']}
          data={data}
        />
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampsiteTypeChart)
