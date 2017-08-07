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

          <p>
						<input type="radio" id="radio01" name="radio" defaultChecked="checked" />
						<label htmlFor="radio01"><span></span>Radio Button 1</label>
					</p>
					<p>
						<input type="radio" id="radio02" name="radio" />
						<label htmlFor="radio02"><span></span>Radio Button 2</label>
					</p>
					<p>
						<input type="checkbox" id="radio04" name="radioother" defaultChecked="checked" disabled="disabled" />
						<label htmlFor="radio04"><span></span>Radio Button 4</label>
					</p>
					<p>
						<input type="checkbox" id="radio05" name="radioother2" disabled="disabled" />
						<label htmlFor="radio05"><span></span>Radio Button 5</label>
					</p>

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
