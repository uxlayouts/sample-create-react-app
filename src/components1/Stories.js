import React, { Component } from 'react';
//import axios from 'axios';
import StoriesDisplay from './StoriesDisplay';
import jsonAPI from './data/posts';

class Stories extends Component {
  state = { postList: [] };

  componentDidMount () {
    const postListObject = jsonAPI.slice(0, 12);
    this.setState({
      postList: postListObject
    });

    // const dataAPI = 'https://jsonplaceholder.typicode.com';
    // axios
    //   .get(dataAPI + '/posts')
    //   .then((response) => {
    //     const postList = response.data.slice(0, 12);
    //     this.setState({
    //       postList: postList
    //     });
    //   }).catch((error) => { console.log(error)}
    // );

  }

  render() {
    return (
      <div>
        <StoriesDisplay {...this.state} />
      </div>
    );
  }
}

export default Stories;
