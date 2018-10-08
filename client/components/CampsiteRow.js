import React, { Component } from 'react';
import { Table, Button, Modal} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchCampsite } from '../store/campsite';
import { formatPrice } from '../utils/formatPrice';

const mapDispatchToProps = dispatch => ({
    fetchCampsite: id => dispatch(fetchCampsite(id))
});

class CampsiteRow extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.props.fetchCampsite(id);
    }

    render() {
        const {campsite, amenities, editSubmit} = this.props;
        return (
            <Table.Row key={campsite.id}>
                <Table.Cell>{campsite.id}</Table.Cell>
                <Table.Cell>{campsite.name}</Table.Cell>
                <Table.Cell>{campsite.location.coordinates[0]}</Table.Cell>
                <Table.Cell>{campsite.location.coordinates[1]}</Table.Cell>
                {/* <Table.Cell>{campsite.coverImage}</Table.Cell> */}
                <Table.Cell>{campsite.typing}</Table.Cell>
                <Table.Cell>{formatPrice(campsite.cost)}</Table.Cell>
                {/* <Table.Cell>{campsite.amenities.join(', ')}</Table.Cell> */}
                {/* <Table.Cell>{campsite.desc}</Table.Cell> */}
                <Table.Cell>
                    Filler
                    {/* <Modal
                        trigger={
                            <Button
                                basic
                                color="blue"
                                value={campsite.id}
                                onClick={() => this.handleClick(campsite.id)}
                            >Edit
                        </Button>
                        }
                    >
                        <Modal.Content>
                            {/* <CampsiteForm campsite={campsite} amenities={amenities} handleSubmit={editSubmit} /> */}
                       {/*} </Modal.Content>
                    </Modal> */}
                </Table.Cell>
            </Table.Row>
        )
    }
}

export default connect(null, mapDispatchToProps)(CampsiteRow);
