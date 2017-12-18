import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { func, shape, arrayOf, string, bool, object } from 'prop-types';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import routes from './routes';
import './assets/scss/core.css';

class App extends Component {
  // Set Initial State
  state = {
    showMenu: false,
    postList: [],
  };

  // Fetch Stories And Push Into State
  componentDidMount () {
    const dataAPI = 'http://localhost:3030';
    // Ajax call with Axios
    axios
      .get(dataAPI + '/stories?_page=1&_limit=12')
      .then((response) => {
        const postList = response.data;
        this.setState({
          postList: postList
        });
        //console.log(postList);
      }).catch((error) => { console.log(error)}
    );
  }

  // Set Child Context So We Don't Have To Pass State As Props
  getChildContext() {
    return {
      store: this.state
    }
  }

  // Rendering Routes
  render() {
    return (
      <Router>
        {renderRoutes(routes)}
      </Router>
    );
  }
}

// Initializing Child Context So We Don't Have To Pass State As Props
App.childContextTypes = {
  store: object,
  location: shape({}),
}

// Type Seting With Prop-Types
App.propTypes = {
  routes: arrayOf(
    shape({
      path: string,
      component: func,
      name: string,
      exact: bool,
    }),
  ),
};

export default App;
