import React from 'react';
import { object } from 'prop-types';

const StoryDisplay = ({ id, title, body }, { router }) => {

  const goBack = (event) => {
    router.history.goBack()
  };

  return (
    <div>
      <button className="btn-hollow pull-right" onClick={goBack}>All Stories</button>
      <br /><br /><br />
      <div className="card tall">
        <h2>Story {id}</h2>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
}

StoryDisplay.contextTypes = {
  router: object,
}

export default StoryDisplay;
