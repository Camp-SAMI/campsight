import React, {Component, Fragment} from 'react'
import Webcam from 'react-webcam'
import {Typography, Button, Grid, Card} from '@material-ui/core'
import {connect} from 'react-redux'
import {toggleCamera, setCameraData} from '../store/ticketFormContainer'

class Camera extends Component {
  state = {
    image: '',
    point: {}
  }
  setRef = webcam => {
    this.webcam = webcam
  }

  locationFunc = position => {
    this.setState({
      point: {
        type: 'Point',
        coordinates: [position.coords.latitude, position.coords.longitude]
      }
    })
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot()

    navigator.geolocation.getCurrentPosition(this.locationFunc)
    this.setState({image: imageSrc})
  }

  usePicture = () => {
    const selectedPic = this.state.image
    const cameraCapturedData = this.state.point

    const cameraImagePos = {selectedPic, cameraCapturedData}
    this.props.setCameraData(cameraImagePos)
    this.props.toggle()
  }

  toggle = () => {
    this.props.toggle()
  }

  retake = () => {
    this.setState({image: ''})
  }

  render() {
    return (
      <Grid container justify="center" alignContent="center">
        <Card raised>
          <Grid container justify="center" alignContent="center">
            <div>
              <Grid item>
                {this.state.image ? (
                  <img src={this.state.image} />
                ) : (
                  <Webcam
                    ref={this.setRef}
                    audio={false}
                    screenshotFormat="image/jpeg"
                    videoConstraints={{
                      width: 1280,
                      height: 720
                    }}
                  />
                )}
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="space-evenly"
                >
                  {this.state.image ? (
                    <Fragment>
                      <Grid item>
                        <Button
                          variant="raised"
                          size="large"
                          color="primary"
                          onClick={this.retake}
                          align="center"
                          style={styles.button}
                        >
                          Retake
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="raised"
                          size="large"
                          color="primary"
                          onClick={this.usePicture}
                          align="center"
                          style={styles.button}
                        >
                          Use Picture
                        </Button>
                      </Grid>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <Grid item>
                        <Button
                          variant="raised"
                          size="large"
                          color="primary"
                          onClick={this.capture}
                          align="center"
                          style={styles.button}
                        >
                          Take Pic
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="raised"
                          size="large"
                          color="primary"
                          onClick={this.toggle}
                          align="center"
                          style={styles.button}
                        >
                          Back
                        </Button>
                      </Grid>
                    </Fragment>
                  )}
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Card>
      </Grid>
    )
  }
}

const mapProps = dispatch => ({
  toggle: () => dispatch(toggleCamera()),
  setCameraData: data => dispatch(setCameraData(data))
})

export default connect(null, mapProps)(Camera)

const styles = {
  button: {
    margin: 10,
    backgroundColor: '#1cb5ac'
  }
}
