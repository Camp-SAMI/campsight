import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {Card, Image} from 'semantic-ui-react'

const CampsiteBlock = props => {
  const {campsite} = props
  return (
    <li>
      <NavLink to={`/campsites/${campsite.id}`}>
        {/* <article>
                    <div>
                        <div>
                            <ul>
                                <li>
                                    <span>{campsite.id}</span>
                                </li>
                            </ul>
                            <img src={campsite.coverImage} />
                        </div>
                        <div>
                            <h4><span>{campsite.amenities.map(
                            amenity => <p key={amenity.id}>{amenity.type}</p>)}
                            </span></h4>
                        </div>
                    </div>
                </article> */}
        <Card>
          <Image src={campsite.coverImage} />
          <Card.Content>
            <Card.Header> {campsite.name}</Card.Header>
          </Card.Content>
        </Card>
      </NavLink>
    </li>
  )
}

export default CampsiteBlock
