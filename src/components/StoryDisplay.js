import React from 'react';
import moment from 'moment';

const StoryDisplay = ({ id, title, body, dateCreated, inEdit, toggleEdit, updateStory, deleteStory }) => {
  return (
    <div className="card tall">
      {inEdit ?
        <div>
          <input id="title" defaultValue={title} />
          <textarea id="body" defaultValue={body} />
          <button onClick={updateStory}>Update</button>
          <button className="btn-hollow" onClick={toggleEdit}>Cancel</button>
        </div>
        :
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
          <small>{moment(dateCreated).fromNow()}</small>
          <p className="link" onClick={e => updateStory(e, id, title, body)}>Edit</p>
          <p className="link" onClick={e => deleteStory(e, id)}>Delete</p>
        </div>
      }
    </div>
  );
}

export default StoryDisplay;

// <div className="card tall">
//   <p className="link" onClick={toggleEdit}>{inEdit ? 'Cancel' : 'Edit'}</p>
//   {inEdit ? <input id="title" defaultValue={title} /> : <h2>{title}</h2>}
//   {inEdit ? <textarea id="body" defaultValue={body} /> : <p>{body}</p>}<br />
//   {inEdit ? <button onClick={updateStory}>Update</button> : <small>{moment(dateCreated).fromNow()}</small>}<br />
// </div>
