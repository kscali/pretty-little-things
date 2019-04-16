import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ user, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login"></Link>
      <Link to="/signup"></Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {user.first_name}!</h2>
      <button className="header-button" onClick={logout}></button>
    </hgroup>
  );

  return user ? personalGreeting() : sessionLinks();
};


export default Greeting;
