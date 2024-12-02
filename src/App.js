import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Todo from "./Todo"; 
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs"; 
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App container">
        {/* Navbar */}
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">My App</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">To-Do List</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact-us">Contact Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about-us">About Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="mt-4">
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
