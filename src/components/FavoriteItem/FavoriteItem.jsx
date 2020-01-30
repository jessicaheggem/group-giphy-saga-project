import React, { Component } from 'react';
import {connect} from 'react-redux';

class FavoriteItem extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the plantList from the API
    }

    render() {
        return (
            <>
            </>
        );
    }

}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(FavoriteItem);