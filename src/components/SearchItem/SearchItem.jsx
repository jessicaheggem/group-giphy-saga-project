import React, { Component } from 'react';
import Header from '../Header/Header'
import { connect } from 'react-redux'

class SearchItem extends Component {

    render () {
        return (
            <>
                <img src={this.props.gif.images.original.url}/>
            </>

        )
    }

}




const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(SearchItem);