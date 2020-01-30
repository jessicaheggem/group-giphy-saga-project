import React, { Component } from 'react';
import Header from '../Header/Header'
import { connect } from 'react-redux'



class Search extends Component {
    // componentDidMount(){
    //     this.handleClick();
    // }
    state = {
        search: ''
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }


    handleClick = () => {
        this.props.dispatch({
            type: 'GIPHY_SEARCH',
            payload: this.state.search
        })
        console.log(this.state.search);

        
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

export default connect()(Search);
