import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SongList from "./components/SongList";
import Singing from "./components/Singing";
import Contact from "./components/Contact";

// PUBLIC_INTERFACE
function App() {
  /** Main app: persistent Navbar & page routing (Home, SongList, Singing, Contact) */
  return (
    <Router>
      <div className="app">
        <Navbar />
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