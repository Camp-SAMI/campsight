import React, {Component, Fragment} from 'react'
import {Container, Divider, Header, Segment, Grid} from 'semantic-ui-react'
import PriorReservationsChart from './PriorReservationsChart'
import TopCampsitesThisWeek from './TopCampsitesThisWeek'
import CampsiteTypeChart from './CampsiteTypeChart'

export default function Insights() {
  return (
    <Fragment>
      <Divider hidden />
      <Segment>
        <Header as="h1">Insights</Header>
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
