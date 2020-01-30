import React, { Component } from 'react';
import Header from '../Header/Header'



class Search extends Component {
    handleChange = () => {
        this.setState({
            search: ''
        })
    }


    handleClick = () => {
        this.props.dispatch({
            type: 'GIPHY_SEARCH',
            payload: this.state.search
        })
    }

    render() {
        return (
            <>
                <Header />
                <h1>Search</h1>
                <input type="text" placeholder="Search Gifs" onChange={this.handleChange} />
                <button onClick={this.handleClick}>Search</button>
                
            </>
        );
    }

}

export default Search;
