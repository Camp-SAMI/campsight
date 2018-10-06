import React, {Component, Fragment} from 'react'
import Webcam from 'react-webcam'
import {Typography, Button, Grid, Card} from '@material-ui/core'

class Camera extends Component {
  state = {
    image: ''
  }
  setRef = webcam => {
    this.webcam = webcam
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot()
    this.setState({image: imageSrc})
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position.coords.latitude, position.coords.longitude)
    })
  }

  usePicture = () => {
    const selectedPic = this.state.image
  }

  retake = () => {
    this.setState({image: ''})
  }

  render() {
    return (
      <Grid container justify="center" alignContent="center">
        <Card raised>
          <Grid item>
            <Typography style={{marginTop: 20}} variant="subheading">
              Camera
            </Typography>
          </Grid>
          <Grid container justify="center" alignContent="center">
            <div>
              <Grid item>
                {this.state.image ? (
                  <img src={this.state.image} />
                ) : (
                  <Webcam ref={this.setRef} screenshotFormat="image/jpeg" />
                )}
              </Grid>
              <Grid item>
                {this.state.image ? (
                  <Fragment>
                    <Grid item>
                      <Button
                        variant="outlined"
                        size="large"
                        color="primary"
                        onClick={this.retake}
                        align="center"
                      >
                        Retake
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        size="large"
                        color="primary"
                        onClick={this.usePicture}
                        align="center"
                      >
                        Use Picture
                      </Button>
                    </Grid>
                  </Fragment>
                ) : (
                  <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    onClick={this.capture}
                    align="center"
                  >
                    Take Pic
                  </Button>
                )}
              </Grid>
            </div>
          </Grid>
        </Card>
      </Grid>
    )
  }
}

export default Camera
