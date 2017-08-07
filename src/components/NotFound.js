import React from 'react';
import { object } from 'prop-types';

const NotFound = (props, { router }) => {

  const navTo = (event) => {
    router.history.push("/")
  };

  const goBack = (event) => {
    router.history.goBack()
  };

  return (
    <div className="card tall vertCenter">
      <div className="item">
        <h1>Opps, Nothing Here.</h1>
        <p>Sorry the page you are looking for can not be found.</p>
        <br />
        <div className="center-items">
          <button onClick={navTo}>Home</button><button className="btn-hollow" onClick={goBack}>Go Back</button>
        </div>
      </div>
    </div>
  );
}

NotFound.contextTypes = {
  router: object,
}

export default NotFound;
