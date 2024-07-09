import React from "react";
import { Link } from "react-router-dom";

const Contact = () => (
  <div>
    <h1>Contact</h1>
    <p>Get in touch with us!</p>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  </div>
);

export default Contact;
