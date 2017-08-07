import React from 'react';
import { NavLink } from 'react-router-dom';
const StoriesDisplay = (props) => {
  // const createNew = (event) => {
  //
  // };
  return (
    <div className="wrapperCard">
      {props.postList.map(({ id, title, body }) => (
        <NavLink to={`/stories/${id}`} key={id}>
        <div className="card">
          <h4>{title}</h4>
          <small>{body}</small>
        </div>
        </NavLink>
      ))}
    </div>
  );
}

export default StoriesDisplay;
