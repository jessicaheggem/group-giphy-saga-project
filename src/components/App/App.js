import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Search from '../Search/Search'
import Favorites from '../Favorites/Favorites'
class App extends Component {

  render() {
    return (
      <Router>
        <Link to="/">Search</Link>
        <Link to="/favorites">Favorites</Link>
        <Route exact path="/" component={Search} />
        <Route path="/favorites" component={Favorites} />

        <div>
          <h1>Giphy Search!</h1>
        </div>
      </Router>

    );
  }

}

export default App;
