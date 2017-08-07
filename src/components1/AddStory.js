import React from 'react';
import { object } from 'prop-types';

const AddStory = (props, { router }) => {

  const navTo = (event) => {
    router.history.push("/")
  };
  //
  // const goBack = (event) => {
  //   router.history.goBack()
  // };

  return (
    <div className="card tall vertCenter">
      <div className="item">
        <h1>Add A Story</h1>
        <p>Sorry the page you are looking for can not be found.</p>
        <br />
        <div className="center-items">
        <div className="center-block">

          <label>Title</label><br />
          <input type="text" />

          <label>Story Content</label><br />
          <textarea></textarea>

        </div>

          <label>Tags</label><br />
          <input type="text" />

          <br />
          <button onClick={navTo}>Save</button>
        </div>
      </div>
    </div>
  );
}

AddStory.contextTypes = {
  router: object,
}

export default AddStory;
