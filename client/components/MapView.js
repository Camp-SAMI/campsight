import React, {Component} from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import Typogragphy from '@material-ui/core/Typography';
import { typgoraphy } from '@material-ui/core/styles';

class MapView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoWindowDisplayed: false,
            selectedMarker: {}
        }
    }

    //For each campsite in campsites, render a marker. If clicked on, it should open the modal page. If hovered over, it should display a small info window?
    render() {
        const { campsites, campsite } = this.props;
        return (
            <Map google={this.props.google} initialCenter={{lat: 37.856, lng: -16.89034}} className={'map'} zoom={16}>
                {campsites.map(camp => {
                    return <Marker key={camp.id} name={camp.name} position={camp.location} />
                })}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBvCoW6W-GS1nOrBnLm3bUybUG9wDfo-5U'
})(MapView);
