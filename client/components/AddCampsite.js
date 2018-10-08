import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Input, TextArea, Dropdown, Form, Segment, Button } from 'semantic-ui-react';
import locationConverter from '../utils/locationConverter';
import { fetchCampsites, addNewCampsiteToServer } from '../store/campsites';
import { fetchAmenities } from '../store/amenities';

const types = [
    {value: 'tent', text: 'Tent'},
    {value: 'trailer', text: 'Trailer'},
    {value: 'cabin', text: 'Cabin'}
]

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        amenities: state.amenities,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCampsites: () => dispatch(fetchCampsites()),
    addCampsite: campsite => dispatch(addNewCampsiteToServer(campsite)),
    fetchAmenities: () => dispatch(fetchAmenities())
});

class AddCampsite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            latitude: 43.769405,
            longitude: -89.202743,
            coverImage: '',
            images: '',
            amenities: [],
            typing: '',
            desc: '',
            cost: 3000
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchCampsites();
        this.props.fetchAmenities();
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const campsite = {
            name: this.state.name,
            location: locationConverter(this.state.latitude, this.state.longitude),
            coverImage: this.state.coverImage,
            images: this.state.images.split(', '),
            amenities: this.state.amenities,
            typing: this.state.typing,
            desc: this.state.desc,
            cost: this.state.cost
        }
        this.props.addCampsite(campsite);
    }

    render() {
        const { amenities } = this.props;
        const amenityOptions = amenities.map(function(amenity) {
            return { key: amenity.category, value: amenity.category, text: amenity.category }
        });
        return (
            <Segment inverted>
                <Form inverted>
                    <Form.Field 
                        control={Input}
                        fluid
                        type="text"
                        name="name"
                        label="Name"
                        required={true}
                        onChange={this.handleChange}
                    />
                    <Form.Field
                        control={Input}
                        type="number"
                        step="0.000001"
                        fluid
                        name="latitude"
                        label="Latitude"
                        required={true}
                        defaultValue={this.state.latitude}
                        onChange={this.handleChange}
                    />
                    <Form.Field
                        control={Input}
                        type="number"
                        step="0.000001"
                        fluid
                        name="longitude"
                        label="Longitude"
                        required={true}
                        defaultValue={this.state.longitude}
                        onChange={this.handleChange}
                    />
                    <Form.Field
                        control={Input}
                        type="text"
                        fluid
                        name="coverImage"
                        label="Cover Image URL"
                        onChange={this.handleChange}
                    />
                    <Form.Field
                        control={Input}
                        type="text"
                        fluid
                        name="images"
                        label="Image URLs"
                        onChange={this.handleChange}
                    />
                    <Form.Field
                        control={Dropdown}
                        placeholder="type"
                        fluid
                        selection
                        name="typing"
                        label="Typing"
                        options={types}
                        onChange={this.handleChange}
                    />
                    <Form.Field
                        control={Dropdown}
                        fluid
                        multiple
                        selection
                        options={amenityOptions}
                        simple
                        item
                        name="amenities"
                        label="Amenities"
                        onChange={this.handleChange}
                    />
                    <Form.Field
                        control={TextArea}
                        name="desc"
                        label="Description"
                        onChange={this.handleChange}
                    />
                    <Form.Field
                        control={Input}
                        fluid
                        type="number"
                        name="cost"
                        label="Cost (in cents)"
                        step="1"
                        defaultValue={this.state.cost}
                        onChange={this.handleChange}
                        required={true}
                    />
                </Form>
                <Button onClick={this.handleSubmit}>Submit</Button>
            </Segment>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddCampsite))