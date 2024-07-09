import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const UserProfile = lazy(() => import("./pages/UserProfile"));

const App = () => (
  <div>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
    <Footer />
  </div>
);

export default App;

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

const Footer = () => (
  <footer>
    <p>&copy; 2024 My Website</p>
  </footer>
);

const NotFound = () => (
  <div>
    <h1>404 - Not Found</h1>
    <Link to="/">Go back to Home</Link>
  </div>
);
