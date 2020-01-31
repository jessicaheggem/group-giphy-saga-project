import React, { Component } from 'react';
import Header from '../Header/Header'
import { connect } from 'react-redux'
import SearchItem from '../SearchItem/SearchItem'


class Search extends Component {
    // componentDidMount(){
    //     this.handleClick();
    // }
    state = {
        search: '',
        conditionalStuff: <h1></h1>
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
        this.setState({
            search: '',
            conditionalStuff: <ul>{this.props.reduxState.giphyReducer.map((search) => {
                return(
                    <>
                    <h1>it works?</h1>
                     <SearchItem />
                    </>
                )
            })} 
            </ul>
        })
        
    }

    render() {

        
        return (
            <>
                <Header />
                <h1>Search</h1>
                <input type="text" placeholder="Search Gifs" onChange={this.handleChange} />
                <button onClick={this.handleClick}>Search</button>
           
                {this.props.reduxState.giphyReducer.map((searchItem) => {
                return(
                    <>
                    
                     <SearchItem gif={searchItem}/>
                    </>
                )
            })}
            </>
        );
    }

}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Search);
