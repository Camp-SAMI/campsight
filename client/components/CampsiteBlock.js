import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const CampsiteBlock = (props) => {
    const { campsite } = props;
    return (
        <li>
            <article>
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
            </article>
        </li>
    )
}

export default CampsiteBlock;