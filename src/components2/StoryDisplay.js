import React from 'react';
import moment from 'moment';

const StoryDisplay = ({
  id,
  title,
  body,
  dateCreated,
  inEdit,
  toggleEdit,
  updateStory,
  deleteStory,
  updateCurrentStoryContent,
}) => (
  <div className="card tall">
    {inEdit ?
      <div>
        <br />
        <input id="title" defaultValue={title} onChange={updateCurrentStoryContent} />
        <textarea id="body" defaultValue={body} onChange={updateCurrentStoryContent} />
        <div className="center-items">
          <button onClick={() => updateStory(id, title, body)}>Update</button>
          <button className="btn-hollow" onClick={toggleEdit}>Cancel</button>
        </div>
      </div>
      :
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <small>{moment(dateCreated).fromNow()}</small><br /><br />
        <div className="center-items">
          <button onClick={() => toggleEdit(id)}>Edit</button>
          <button className="btn-hollow" onClick={() => deleteStory(id)}>Delete</button>
        </div>
      </div>
    }
    <br />
  </div>
)

export default StoryDisplay;

// <div className="card tall">
//   <p className="link" onClick={toggleEdit}>{inEdit ? 'Cancel' : 'Edit'}</p>
//   {inEdit ? <input id="title" defaultValue={title} /> : <h2>{title}</h2>}
//   {inEdit ? <textarea id="body" defaultValue={body} /> : <p>{body}</p>}<br />
//   {inEdit ? <button onClick={updateStory}>Update</button> : <small>{moment(dateCreated).fromNow()}</small>}<br />
// </div>
