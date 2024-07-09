import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Welcome to the Home page!</p>
    <nav>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/user/1">User Profile</Link>
    </nav>
  </div>
);

export default Home;
