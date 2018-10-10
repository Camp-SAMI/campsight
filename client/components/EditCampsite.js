import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Container, Button, Segment, Form } from 'semantic-ui-react';
import { updateCampsiteToServer } from '../store/campsites';
import { fetchCampsite } from '../store/campsite';
import { fetchAmenities } from '../store/amenities';

const types = [
    {value: 'tent', text: 'Tent'},
    {value: 'trailer', text: 'Trailer'},
    {value: 'cabin', text: 'Cabin'}
]

const mapStateToProps = state => {
    return {
        amenities: state.amenities,
        campsites: state.campsites
    }
};

const mapDispatchToProps = dispatch => ({
    updateCampsite: campsite => dispatch(updateCampsiteToServer(campsite)),
    fetchCampsite: id => dispatch(fetchCampsite(id)),
    fetchAmenities: () => dispatch(fetchAmenities())
});

class EditCampsite extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            latitude: 0.0,
            longitude: 0.0,
            coverImage: '',
            images: '',
            amenities: [],
            typing: '',
            desc: '',
            cost: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchAmenities();
        // await this.props.fetchCampsite(this.props.id);
        const imagesStr = this.props.campsite.images ? this.props.campsite.images.join(', ') : '';
        this.setState({
            name: this.props.campsite.name,
            latitude: this.props.campsite.location.coordinates[0],
            longitude: this.props.campsite.location.coordinates[1],
            coverImage: this.props.campsite.coverImage || '',
            images: imagesStr,
            amenities: this.props.campsite.amenities,
            typing: this.props.campsite.typing,
            desc: this.props.campsite.desc,
            cost: this.props.campsite.cost
        });
    }

    handleChange(e, {name, value}) {
        this.setState(() => ({
            [name]: value
        }), () => console.log(this.state));
        // console.log(this.state);
    }

    handleSubmit(event) {
        // event.preventDefault();
        const { editSubmit } = this.props;
        const images = this.state.images ? this.state.images.split(', ') : [];
        const imageArr = images.filter(image => image.trim().length);
        const campsite = {
            id: this.props.campsite.id,
            name: this.state.name,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            coverImage: this.state.coverImage,
            images: imageArr,
            amenities: this.state.amenities,
            typing: this.state.typing,
            desc: this.state.desc,
            cost: this.state.cost
        };
        editSubmit(campsite);
    }

    render() {
        const { campsite, amenities, editSubmit } = this.props;
        console.log('campsite', this.campsite);
        const ims = campsite.images ? campsite.images.join(', ') : '';
        const amenityOptions = amenities.map(function(amenity) {
            return { key: amenity.category, value: amenity.category, text: amenity.category }
        });
        return (
            <Container>
                <Segment>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group widths="equal">
                            <Form.Input
                                type="text" 
                                fluid 
                                label="Name"
                                name="name"
                                required={true}
                                onChange={this.handleChange}
                                defaultValue={campsite.name}
                            />
                            <Form.Input
                                fluid
                                type="number"
                                step="0.000001"
                                label="Latitude"
                                name="latitude"
                                required={true}
                                defaultValue={campsite.location.coordinates[0]}
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                fluid
                                type="number"
                                step="0.000001"
                                label="Longitude"
                                name="longitude"
                                required={true}
                                defaultValue={campsite.location.coordinates[1]}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group wdiths="equal">
                            <Form.Input
                                fluid
                                type="text"
                                label="Cover Image URL"
                                name="coverImage"
                                defaultValue={campsite.coverImage}
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                fluid
                                type="text"
                                label="Image URLs"
                                name="images"
                                defaultValue={ims}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Dropdown
                                fluid
                                multiple
                                selection
                                label="Amenities"
                                name="amenities"
                                options={amenityOptions}
                                simple
                                item
                                onChange={this.handleChange}
                                // defaultValue={campsite.amenities}
                            />
                            <Form.Dropdown
                                fluid
                                selection
                                name="typing"
                                label="Typing"
                                options={types}
                                defaultValue={campsite.typing}
                                onChange={this.handleChange}
                                required={true}
                            />
                            <Form.TextArea
                                name="desc"
                                rows={8}
                                label="Description"
                                onChange={this.handleChange}
                                defaultValue={campsite.desc}
                                required={true}
                            />
                            <Form.Input
                                fluid
                                type="number"
                                name="cost"
                                step="1"
                                label="Cost (in cents)"
                                defaultValue={campsite.cost}
                                onChange={this.handleChange}
                                required={true}
                            />
                        </Form.Group>
                        <Button>Submit</Button>
                    </Form>
                </Segment>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCampsite);