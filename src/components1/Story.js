import React, { Component } from 'react';
import axios from 'axios';
import { shape } from 'prop-types';
import StoryDisplay from './StoryDisplay';

class Story extends Component {
  state = { currentStory: "" };

  componentDidMount () {
    const {location} = this.props
    const splitOnject = location.pathname.lastIndexOf('/');
    const pageId = location.pathname.substring(splitOnject + 1);

    const dataAPI = 'https://jsonplaceholder.typicode.com';
    axios.get(dataAPI + '/posts/' + pageId)
      .then((response) => {
        this.setState({
          currentStory: response.data
        });
      })
      .catch( (error) => {
        console.log(error);
      }
    );
  }

  render() {
    const { currentStory } = this.state;
    if (!currentStory) return (
      <div>Loading</div>
    )
    return (
      <div className="">
        <StoryDisplay {...currentStory} />
      </div>
    );
  }
}

Story.propTypes = {
  location: shape({}),
};

export default Story;
