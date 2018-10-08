import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Card, Grid, Button} from '@material-ui/core'



class HelpSubSuccess extends Component {

  render(){
    return(
      <Grid justify='center' alignContent='center' container>
      <Grid item>
      <Card raised>
      <Button variant='raised' color='primary'><Link to='/'>Thank you for you submission</Link></Button>
      </Card>
      </Grid>
      </Grid>
    )
  }
}

export default HelpSubSuccess