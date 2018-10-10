import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Card, Grid, Button} from '@material-ui/core'

class HelpSubSuccess extends Component {
  render() {
    return (
      <Grid justify="center" alignItems="center" container>
        <Grid item>
          <Link to="/">
            <Card style={{width: '250px'}} raised>
              <Button
                variant="raised"
                color="primary"
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#1cb5ac'
                }}
              >
                Thank you for your Submission
              </Button>
            </Card>
          </Link>
        </Grid>
      </Grid>
    )
  }
}

export default HelpSubSuccess

const styles = {
  card: {
    width: '95%',
    heigth: '95%'
  },
  textFields: {
    width: '95%',
    margin: 10
  },
  gridContainer: {
    width: '100vw',
    margin: 10
  },
  button: {
    width: '50vw',
    margin: 10,
    backgroundColor: '#1cb5ac'
  },
  smButton: {
    width: '120px',
    margin: 10,
    backgroundColor: '#1cb5ac'
  }
}
