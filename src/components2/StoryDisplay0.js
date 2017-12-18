import React from 'react';

const StoryDisplay = ({ id, title, body }) => {
  return (
      <div className="card tall">
        <h2>Story {id}</h2>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
  );
}

export default StoryDisplay;
