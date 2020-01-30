import React, { Component } from 'react';
import Header from '../Header/Header'

class Search extends Component {
    handleChange = () => {
        this.setState({
            search: ''
        })
    }

    render() {
        return (
            <>
                <Header />
                <h1>Search</h1>
                <input type="text" placeholder="Search Gifs" onChange={this.handleChange} />
            </>
        );
    }

}

export default Search;
