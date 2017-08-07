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
    <div className="page missed">
      <div>
        <h1>404</h1>
        <button onClick={navTo}>Home</button> <button onClick={goBack}>Go Back</button>
      </div>
    </div>
  );
}

NotFound.contextTypes = {
  router: object,
}

export default NotFound;
