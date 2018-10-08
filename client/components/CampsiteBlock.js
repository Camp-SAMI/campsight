import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {Card, Image} from 'semantic-ui-react'

const CampsiteBlock = props => {
  const {campsite} = props
  return (
    <div>
      <Card>
        <Image src={campsite.coverImage} />
        <Card.Content>
          <Card.Header> {campsite.name}</Card.Header>
          {/* <Card.Description>{campsite.desc}</Card.Description> */}
        </Card.Content>
      </Card>
    </div>
  )
}

export default CampsiteBlock
