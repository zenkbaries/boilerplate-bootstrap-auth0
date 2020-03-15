// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="nav-link" to="/">Home</Link>
      
      <div className="navbar-nav mr-auto">
      {isAuthenticated && <Link className="nav-link nav-item" to="/profile">Profile</Link>}
      {isAuthenticated && <Link className="nav-link nav-item" to="/external-api">External API</Link>}
      </div>
      {!isAuthenticated && <button className="btn btn-outline-success" onClick={() => loginWithRedirect({})}>Log in</button>}
      {isAuthenticated && <div className="nav-link nav-item" ><button className="btn btn-outline-success" onClick={() => logout()}>Log out</button></div>}
      

      
    </nav>
  );
};

export default NavBar;