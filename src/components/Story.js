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
        console.log(response);
        this.setState({
          currentStory: response.data
        });
      })
      .catch( (error) => {
        console.log(error);
      }
    );
  }

  // updateStory(e, id, title, body){
  //   console.log(id + title + body);
  //   this.props.history.push('/stories/' + id)
  //   const dataAPI = 'http://localhost:3030';
  //   let date = new Date();
  //   axios
  //     .post(dataAPI + '/stories/' + id,
  //       {
  //         title: title,
  //         body: body,
  //         dateCreated: date,
  //       }
  //     )
  //     .then((response) => {
  //       this.props.history.push('/stories/' + id)
  //     }).catch((error) => { console.log(error)}
  //   );
  //
  //   // const dataAPI = 'http://localhost:3030';
  //   // let date = new Date();
  //   // axios
  //   //   .patch(dataAPI + '/stories/' + id,
  //   //     {
  //   //       title: title,
  //   //       body: body,
  //   //       dateCreated: date,
  //   //     }
  //   //   )
  //   //   .then((response) => {
  //   //     this.props.history.push('/stories/' + id)
  //   //   }).catch((error) => { console.log(error)}
  //   // );
  // }

  updateCurrentStoryContent = (e) => {
    const { id, value } = e.target
    // console.log(e.target);
    // console.log(e.target.id);
    this.setState({
      currentStory: {
        ...this.state.currentStory,
        [id]: value
      }
    });
    // Get info from inputs and set state
  }

  updateStory = (id) => {
    //console.log('Updating Story ' + id);
    console.log(this.state.currentStory);
    const {title,body} = this.state.currentStory
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
        console.log(response);
        this.props.history.push('/stories/' + id)
      }).catch((error) => { console.log(error)}
    );
  }

  // axios({
  //   method: 'DELETE',
  //   url: dataAPI + '/stories/' + id,
  //   headers: { 'Content-Type': 'application/json' },
  // });

  deleteStory = (id) => {
    console.log('Deleting Story ' + id);
    // const dataAPI = 'http://localhost:3030';
    //
    // axios.delete(dataAPI + '/stories/' + id, {
    //   headers: {
    //     'id': id,
    //     'Content-Type': 'application/json'
    //   }
    // })

    // axios({
    //   method: 'DELETE',
    //   url: dataAPI + '/stories/' + id,
    //   headers: { 'Content-Type': 'application/json' },
    // });
    //
    // axios
    //   .delete(dataAPI + '/stories/' + id, {
    //     params: { id: id }
    //   })
    //   .then((response) => {
    //   }).catch((error) => { console.log(error)}
    // );
  }

  toggleEdit = (id) => {
    console.log('Editing Story ' + id);
    this.setState({
      inEdit: !this.state.inEdit
    });
  }

  goBack = () => {
    console.log('Go To Stories Home');
    this.props.history.push('/stories/')
    //this.props.history.goBack()
  };

  render() {

    const { currentStory } = this.state;
    if (!currentStory) return (
      <div>Loading</div>
    )

    return (
      <div className="">
        <button className="btn-hollow pull-right" onClick={this.goBack}>All Stories</button>
        <br /><br /><br />
        <StoryDisplay {...currentStory}
          inEdit={this.state.inEdit}
          toggleEdit={this.toggleEdit}
          updateStory={this.updateStory}
          deleteStory={this.deleteStory}
          updateCurrentStoryContent={this.updateCurrentStoryContent}
         />
      </div>
    );
  }
}

Story.propTypes = {
  location: shape({}),
};

export default Story;
