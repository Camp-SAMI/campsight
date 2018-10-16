import React from 'react'
// import {NavLink} from 'react-router-dom'
// import {connect} from 'react-redux'
import {Card, Image, Icon} from 'semantic-ui-react'
import {formatPrice} from '../utils/formatPrice'

const CampsiteBlock = props => {
  const {campsite} = props
  return (
    <div>
      <Card color="teal">
        <Image src={campsite.coverImage} />
        <Card.Content>
          <Card.Header>Name: {campsite.name}</Card.Header>
          <Card.Meta>
            <span>Type: {campsite.typing}</span>
          </Card.Meta>
          <Card.Content extra>
            <Icon name="money bill alternate outline" />{' '}
            {formatPrice(campsite.cost)} /Day
          </Card.Content>
          {/* <Card.Description>{campsite.desc}</Card.Description> */}
        </Card.Content>
      </Card>
    </div>
  )
}

export default CampsiteBlock
