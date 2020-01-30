import React, { Component } from 'react';
import {connect} from 'react-redux';



class Favorites extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the plantList from the API
        this.getFavorites();
    }

    getFavorites = () => {
        this.props.dispatch({
            type: 'FETCH_FAVORITES'
        })
    }
    

    render() {
        return (
            <h1>Favorites</h1>
            // {this.props.reduxState.favorites.map}
        );
    }

}





export default connect () (Favorites);
