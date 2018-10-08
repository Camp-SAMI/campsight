import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Card, Grid, Button,Typography} from '@material-ui/core'



class HelpSubSuccess extends Component {

  render(){
    return(
      <Grid justify='center' alignItems='center' container>
      <Grid item>
      <Link to='/'>
      <Card style={{width: '250px'}} raised>
        <Button variant='raised' color='primary' style={{width: '100%', height:'100%'}} >Thank you for your Submission</Button>
      </Card>
      </Link>
      </Grid>
      </Grid>
    )
  }
}

export default HelpSubSuccess