import React from 'react';
import { NavLink } from 'react-router-dom';
import { object } from 'prop-types';
import StoriesDisplay from './StoriesDisplay';

const Stories = (props, context) => {
  // const getStore = (store) => {
  //   console.log(context.store)
  // };
  // <p onClick={getStore}>what are my props yo?</p>

  return (
    <div>
      <NavLink to="/stories/add-story"><button className="btn-hollow pull-right">Add Story</button></NavLink>
      <br /><br /><br />
      <StoriesDisplay {...context.store} />
    </div>
  );
}

Stories.contextTypes = {
  store: object
};

export default Stories;
