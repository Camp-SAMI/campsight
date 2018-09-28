import React, { Component } from 'react';
import { fetchCampsites } from '../store/campsites';
import { fetchAmenities } from '../store/amenities';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        amenities: state.amenities
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCampsites: () => dispatch(fetchCampsites()),
    fetchAmenities: () => dispatch(fetchAmenities())
});

//we probably want to have pagination here? For that reason, making it a stateful component makes sense
class CampsiteCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startTime: '',
            endTime: '',
            campsiteType: '',
            campsites: [],
            amenities: [],
            perPage: 6,
            currentPage: [],
            numPages: 0,
            searching: false
        }
    }

    async componentDidMount() {
        if (this.props.fetchCampsites) {
            await this.props.fetchCampsites();
            this.props.fetchAmenities();
            const campsites = this.props.campsites;
            const amenities = this.props.amenities;
            const perPage = this.state.perPage;
            const numPages = Math.ceil(this.props.campsites.length / perPage );
            this.setState({
                campsites: campsites,
                amenities: amenities,
                numPages: numPages
            })

        }
    }

    render() {
        if (this.props.campsites.length && this.state.currentPage && this.state.numPages) {
            const campsites = this.props.campsites;
            const currentPage = this.state.currentPage;
            const isSearch = this.state.isSearch;
            const amenities = this.state.amenities;

            return (
                <div>
                    <div>
                        <div>
                            <h2>Campsite Listings</h2>
                        </div>
                    </div>
                    <br />
                    {/* Until a block view of the campsite is written, the mapped campsites displayed are just the list of ids */}
                    {/* Additionally, each block view should take in a handleClick component that opens up the detailed view of that campsite */}
                    {this.props.campsites.map(
                        campsite => <div key={campsite.id}>{campsite.id}</div>
                    )}
                </div>
            )
        }
        else {
            return (
                <h3>There are no campsites currently available</h3>
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampsiteCollection);
