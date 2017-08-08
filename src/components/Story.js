import React, { Component } from 'react';
import axios from 'axios';
import { shape } from 'prop-types';
import StoryDisplay from './StoryDisplay';

class Story extends Component {
  state = {
    currentStory: "" ,
    inEdit: false,
  };

  componentDidMount () {
    const { location } = this.props
    const splitOnject = location.pathname.lastIndexOf('/');
    const pageId = location.pathname.substring(splitOnject + 1);

    const dataAPI = 'http://localhost:3030';
    axios.get(dataAPI + '/stories/' + pageId)
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

  updateStory(e, id, title, body){
    const dataAPI = 'http://localhost:3030';
    let date = new Date();
    axios
      .patch(dataAPI + '/stories/' + id,
        {
          title: title,
          body: body,
          dateCreated: date,
        }
      )
      .then((response) => {
        this.props.history.push('/stories/' + id)
      }).catch((error) => { console.log(error)}
    );
  }

  deleteStory(e, id){
    const dataAPI = 'http://localhost:3030';
    axios
      .delete(dataAPI + '/stories/' + id)
      .then((response) => {
      }).catch((error) => { console.log(error)}
    );
  }

  toggleEdit(){
    console.log('Edit');
    this.setState({
      inEdit: !this.state.inEdit
    });
  }

  render() {
    const goBack = () => {
      console.log('Go To Stories Home');
      this.props.history.push('/stories/')
      //this.props.history.goBack()
    };

    const { currentStory } = this.state;
    if (!currentStory) return (
      <div>Loading</div>
    )

    return (
      <div className="">
        <button className="btn-hollow pull-right" onClick={goBack}>All Stories</button>
        <br /><br /><br />
        <StoryDisplay {...currentStory} inEdit={this.state.inEdit} toggleEdit={this.toggleEdit.bind(this)} updateStory={this.updateStory.bind(this)} deleteStory={this.deleteStory.bind(this)} />
      </div>
    );
  }
}

Story.propTypes = {
  location: shape({}),
};

export default Story;
