import React, {Fragment} from 'react'
import {Divider, Header, Segment, Grid} from 'semantic-ui-react'
import PriorReservationsChart from './PriorReservationsChart'
import TopCampsitesThisWeek from './TopCampsitesThisWeek'
import CampsiteTypeChart from './CampsiteTypeChart'

export default function Insights() {
  return (
    <Fragment>
      <Divider hidden style={{padding: 0, margin: 0}} />
      <Segment>
        <Header style={{color: 'white', backgroundColor: '#1cb5ac'}} as="h1">
          Insights
        </Header>
      </Segment>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column floated="left" style={{width: 100}}>
            <TopCampsitesThisWeek />
          </Grid.Column>
          <Grid.Column floated="right" style={{width: 100}}>
            <PriorReservationsChart />
          </Grid.Column>
          <Grid.Column>
            <CampsiteTypeChart />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  )
}
