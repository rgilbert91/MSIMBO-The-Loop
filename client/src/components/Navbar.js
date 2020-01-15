import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h3> MSIMBO THE LOOP</h3>
      <Link to="/Dashboard">Home</Link>
      <Link to="/Login">Login</Link>
      <Link to="/profile/:uid">Profile</Link>
      <Link to="/Register">Register</Link>
    </div>
  );
}
