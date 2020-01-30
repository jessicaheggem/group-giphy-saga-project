import React, { Component } from 'react';
import {connect} from 'react-redux'
import FavoriteItem from '../FavoriteItem/FavoriteItem';



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
            {this.props.reduxState.favorites.map((fav) => {
                return(
                    <FavoriteItem fav={fav}/>

                )
            })}
        );
    }

}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Favorites);
