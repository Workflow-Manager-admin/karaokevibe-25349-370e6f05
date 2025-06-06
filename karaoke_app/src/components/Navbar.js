import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

// PUBLIC_INTERFACE
function Navbar() {
  /** Persistent top navigation bar for KaraokeVibe */
  return (
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
  );
}

export default Navbar;
