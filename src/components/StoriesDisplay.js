import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const StoriesDisplay = (props) => {
  return (
    <div className="wrapperCard">
      {props.postList.map(({ id, title, body, dateCreated }) => (
        <NavLink to={`/stories/${id}`} key={id}>
        <div className="card">
          <h4>{title}</h4>
          <small>{body}</small><br />
          <small>{moment(dateCreated).fromNow()}</small>
        </div>
        </NavLink>
      ))}
    </div>
  );
}

export default StoriesDisplay;
