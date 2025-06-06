import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SongList from "./SongList";
import Singing from "./Singing";
import Contact from "./Contact";

// PUBLIC_INTERFACE
function App() {
  /** Main app: persistent Navbar, page routing (Home, SongList, Singing, Contact) */
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              <Link to="/" className="logo" style={{ textDecoration: "none" }}>
                <span className="logo-symbol">*</span> KaraokeVibe
              </Link>
              <div style={{ display: "flex", gap: 20 }}>
                <Link to="/" className="btn" aria-label="Home" style={{ background: "none", color: "var(--accent)" }}>
                  Home
                </Link>
                <Link to="/songs" className="btn" aria-label="Song List" style={{ background: "none", color: "var(--accent)" }}>
                  Song List
                </Link>
                <Link to="/contact" className="btn" aria-label="Contact" style={{ background: "none", color: "var(--accent)" }}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main style={{ flex: 1, marginTop: 84 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<SongList />} />
            <Route path="/sing/:id" element={<Singing />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <div className="container" style={{ paddingTop: 90 }}>
                  <div className="title">404 Not Found</div>
                  <div className="description">
                    The page you are looking for does not exist.<br />
                    <Link to="/" className="btn" style={{ marginTop: 18 }}>
                      Go Home
                    </Link>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;