import React, { Component } from 'react';
import axios from 'axios';
import PostsDisplay from './PostsDisplay';

class Posts extends Component {
  state = { postList: [] };

  componentDidMount () {

    const dataAPI = 'https://jsonplaceholder.typicode.com';
    axios.get(dataAPI + '/posts')
      .then((response) => {
        const postList = response.data.slice(0, 12);
        this.setState({
          postList: postList
        });
      })
      .catch( (error) => {
        console.log(error);
      }
    );

  }

  render() {
    return (
      <div>
        <PostsDisplay {...this.state} />
      </div>
    );
  }
}

export default Posts;
