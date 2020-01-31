import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavoriteItem extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action 
    }

    render() {
        return (
            <>
            {/* {JSON.stringify(this.props.fav)} */}
            <img src={this.props.fav.url} />

            </>
        );
    }

}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(FavoriteItem);