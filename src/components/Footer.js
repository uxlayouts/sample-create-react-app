import React from 'react';
//import moment from 'moment';

const Footer = (props) => {
  const today = new Date();
  //const dd = today.getDate();
  //const mm = today.getMonth()+1; //January is 0!
  const yyyy = today.getFullYear();

  return (
    <div className="footer">
      Copyright {yyyy} Company Name
    </div>
  );
};

export default Footer;

// {moment(article.createdAt).fromNow()}
