import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

const App = () => {
  return (
    <Router>
      {renderRoutes(routes, {...this.state})}
    </Router>
  );
}

export default App;


// import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
// import axios from 'axios';
// import routes from './routes';
//
// class App extends Component {
//   state = {
//     showMenu: false,
//     postList: [],
//   };
//
//   componentDidMount () {
//
//     const dataAPI = 'https://jsonplaceholder.typicode.com';
//     axios.get(dataAPI + '/posts')
//       .then((response) => {
//         const postList = response.data.slice(0, 12);
//         this.setState({
//           postList: postList
//         });
//       })
//       .catch( (error) => {
//         console.log(error);
//       }
//     );
//
//   }
//
//   render() {
//     return (
//       <Router>
//         {renderRoutes(routes)}
//       </Router>
//     );
//   }
// }
//
// export default App;
