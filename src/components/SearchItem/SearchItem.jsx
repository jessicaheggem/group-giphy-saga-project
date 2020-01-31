import React, { Component } from 'react';
import Header from '../Header/Header'
import { connect } from 'react-redux'

class SearchItem extends Component {

    handleClick = () => {
        this.props.dispatch({
            type: 'ADD_TO_FAVORITES',
            payload: this.props.gif.images.original
        })
    }

    render () {

        return (
            <>
                <img src={this.props.gif.images.original.url}/>
                <button onClick={this.handleClick}>Favorite</button>            
            </>

        )
    }

}




const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(SearchItem);