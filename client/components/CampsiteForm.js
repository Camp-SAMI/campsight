import React, { Component } from 'react';
import { connect } from 'react-router-dom';
import { Input, TextArea, Dropdown } from 'semantic-ui-redux-form-fields';
import locationConverter from '../utils/locationConverter';
import { Field, reduxForm } from 'redux-form';

const preventDefault = event => {
    event.preventDefault();
}

let CampsiteForm = (props) => {
    const { handleSubmit, valid, amenities, campsite } = props;
    console.log(props);
    const amenityOptions = amenities.map(function(a) { return {key: a.category, text: a.category, value: a.category }});
    const typingOptions = [
        { key: 'tent', text: 'Tent', value: 'tent'},
        { key: 'cabin', text: 'Cabin', value: 'cabin'},
        { key: 'trailer', text: 'Trailer', value: 'trailer'}
    ];
    return (
        <form onSubmit={valid ? handleSubmit: preventDefault}>
            <Field
                type="text"
                name="name"
                component={Input}
                required={true}
                placeholder='Name'
                topLabel="Name"
            />
            <Field
                type="number"
                name="latitude"
                component={Input}
                required={true}
                defaultValue={43.769405}
                step="0.000001"
                topLabel='Latitude'
            />
            <Field
                type="number"
                name="longitude"
                component={Input}
                required={true}
                defaultValue={-89.202743}
                step="0.000001"
                topLabel="Longitude"
            />
            <Field
                type="text"
                name="coverImage"
                component={Input}
                topLabel="Cover Image URL"
            />
            <Field
                type="text"
                name="images"
                component={Input}
                placeholder="To put in multiple images, add a column and a space after each url name"
                topLabel="Image URLs"
            />
            <Field
                name="amenities"
                component={Dropdown}
                multiple
                selection
                item
                options={amenityOptions}
                topLabel="Amenities"
            />
            <Field
                name="typing"
                component={Dropdown}
                options={typingOptions}
                topLabel="Typing"
                required={true}
            />
            <Field
                name="desc"
                component={TextArea}
                topLabel="Description"
            />
            <Field
                type="number"
                name="cost"
                component={Input}
                topLabel="Cost (in cents)"
                placeholder={3000}
            />

            <button type='submit'>Submit</button>
        </form>
    );
};

export default reduxForm({
    form: 'campsite'
})(CampsiteForm);