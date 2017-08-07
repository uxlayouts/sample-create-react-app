import React from 'react';
import { object } from 'prop-types';
import { NavLink } from 'react-router-dom';

const StoriesDisplay = (props,{ router }) => {
  // const createNew = (event) => {
  //
  // };

  const navTo = (event) => {
    router.history.push("/stories/add-story")
  };

  return (
    <div>
      <button className="btn-hollow pull-right" onClick={navTo}>Add Story</button>
      <br /><br /><br />
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
    </div>
  );
}

StoriesDisplay.contextTypes = {
  router: object,
}

export default StoriesDisplay;

// <div>
//   <button className="btn-hollow pull-right" onClick={createNew}>Add Story</button>
//   <br /><br /><br />
//   <div className="wrapperCard">
//     {props.postList.map(({ id, title, body }) => (
//       <div className="card" key={id}>
//         <h4>{title}</h4>
//         <small>{body}</small>
//         <NavLink to={`/posts/${id}`}>View {id}</NavLink>
//       </div>
//     ))}
//   </div>
// </div>


//
//
// import React from 'react';
// import { object } from 'prop-types';
//
// const PostDisplay = ({ id, title, body }, { router }) => {
//
//   const goBack = (event) => {
//     router.history.goBack()
//   };
//
//   return (
//     <div>
//       <button className="btn-hollow pull-right" onClick={goBack}>Go Back</button>
//       <br /><br /><br />
//       <div className="card tall">
//         <h2>Post {id}</h2>
//         <h2>{title}</h2>
//         <p>{body}</p>
//       </div>
//     </div>
//   );
// }
//
// PostDisplay.contextTypes = {
//   router: object,
// }
//
// export default PostDisplay;
//
//
// import React from 'react';
// import { object } from 'prop-types';
//
// const NotFound = (props, { router }) => {
//
//   const navTo = (event) => {
//     router.history.push("/")
//   };
//
//   const goBack = (event) => {
//     router.history.goBack()
//   };
//
//   return (
//     <div className="card tall vertCenter">
//       <div className="item">
//         <h1>Opps, Nothing Here.</h1>
//         <p>Sorry the page you are looking for can not be found.</p>
//         <br />
//         <div className="center-items">
//           <button onClick={navTo}>Home</button><button className="btn-hollow" onClick={goBack}>Go Back</button>
//         </div>
//       </div>
//     </div>
//   );
// }
//
// NotFound.contextTypes = {
//   router: object,
// }
//
// export default NotFound;
//
//
