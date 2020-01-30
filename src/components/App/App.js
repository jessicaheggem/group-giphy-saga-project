import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';
// import Header from '../Header/Header';
class App extends Component {

  render() {
    return (
      <Router>
        <Link to="/">Search</Link>
        <Link to="/favorites">Favorites</Link>
        <Route exact path="/" component={Search} />
        <Route path="/favorites" component={Favorites} />
      </Router>

    );
  }

}

export default App;
