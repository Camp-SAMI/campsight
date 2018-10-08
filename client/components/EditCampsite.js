import React, {Component} from 'react';
import CampsiteForm from './CampsiteForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import locationConverter from '../utils/locationConverter';
import { Container } from 'semantic-ui-react';
import { updateCampsiteToServer } from '../store/campsites';
import { fetchCampsite } from '../store/campsite';
import { fetchAmenities } from '../store/amenities';

const mapDispatchToProps = dispatch => ({
    fetchCampsite: campsiteId => dispatch(fetchCampsite(campsiteId)),
    updateCampsite: campsiteInfo => dispatch(updateCampsiteToServer(campsiteInfo)),
    fetchAmenities: () => dispatch(fetchAmenities())
})

const mapStateToProps = state => {
    return {
        campsite: state.campsite,
        amenities: state.amenities,
        user: state.user
    }
}

class EditCampsite extends Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
    }
    async componentDidMount() {
        const campsiteId = Number(this.props.match.params.id || this.props.campsite.id);
        await this.props.fetchCampsite(campsiteId);
        await this.props.fetchAmenities();
        console.log('this.campsite', this.props.campsite);
    }

    update(event) {
        const campsiteId = this.props.campsite.id;
        const updateCampsite = this.props.updateCampsite;
        event.preventDefault();
        const campsiteInfo = {
            id: campsiteId,
            name: event.target.elements.name.value,
            location: locationConverter(event.target.elements.latitude.value, event.target.elements.longitude.value),
            coverImage: event.target.elements.coverImage.value,
            images: event.target.elements.images.value.split(', '),
            amenities: event.target.elements.amenities.value,
            typing: event.target.elements.typing.value,
            desc: event.target.elements.desc.value,
            cost: event.target.elements.cost.value
        };
        updateCampsite(campsiteInfo);
        this.props.history('/admin');
    }

    render() {
        const { campsite, amenities } = this.props;
        if ( this.props.campsite.id === parseInt(this.props.match.params.id)) {
            const initValues = {
                name: campsite.name,
                latitude: campsite.location.coordinates[0],
                longitude: campsite.location.coordinates[1],
                coverImage: campsite.coverImage ? campsite.coverImage : '',
                images: campsite.images ? campsite.images.join(', ') : '',
                amenities: campsite.amenities ? campsite.amenities : [],
                typing: campsite.typing ? campsite.typing : 'tent',
                desc: campsite.desc,
                cost: campsite.cost
            };
            console.log('initVals', initValues);
            return (
                // <Container>Here</Container>
                <CampsiteForm initialValues={campsite} handleSubmit={this.update} amenities={amenities} />
            )
        } else {
            return <Container>Campsite not yet loaded.</Container>
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCampsite));