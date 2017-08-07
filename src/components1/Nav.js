import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ showMenu } ) => {
  const toggleMenu = () => {
    this.setState({
      showMenu: !this.showMenu
    });
  }

  return (
    <div className="menu">
      <NavLink onClick={toggleMenu} className="" exact to="/" activeClassName="active">Home</NavLink>
      <NavLink onClick={toggleMenu} className="" to="/about">About</NavLink>
      <NavLink onClick={toggleMenu} className="" to="/stories">Stories</NavLink>
      <NavLink onClick={toggleMenu} className="" to="/fghfghfhg">404</NavLink>
    </div>
  );
};
export default Nav;
