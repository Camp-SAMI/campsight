import React, { Component, Fragment } from 'react';
import { Container, Divider, Header, Segment, Grid } from 'semantic-ui-react';
import PriorReservationsChart from './PriorReservationsChart';
import TopCampsitesThisWeek from './TopCampsitesThisWeek';
import CampsiteTypeChart from './CampsiteTypeChart';

export default function Insights() {
    return (
        <Fragment>
            <Divider hidden />
            <Segment>
                <Header as="h1" >
                    Insights
                </Header>
            </Segment>
            <Grid celled>
            <Grid.Row>
                <Grid.Column >
                    <TopCampsitesThisWeek />
                </Grid.Column>
                <Grid.Column>
                    <PriorReservationsChart />
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <CampsiteTypeChart />
                </Grid.Row>
            </Grid>
        </Fragment>
    )
}