import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

// Mock data for stub implementation
const songs = [
  { id: 1, title: "Shape of You", artist: "Ed Sheeran" },
  { id: 2, title: "Shallow", artist: "Lady Gaga & Bradley Cooper" },
  { id: 3, title: "Let It Go", artist: "Idina Menzel" },
];

// PUBLIC_INTERFACE
function SongList() {
  /** Song List page with curated static songs and 'Sing' button for each. */
  return (
    <div className="container" style={{ paddingTop: 80 }}>
      <h2 className="title" style={{ fontSize: "2rem", marginBottom: 40 }}>Song List</h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {songs.map((song) => (
          <li key={song.id} style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            background: "rgba(255,255,255,0.07)",
            borderRadius: 8,
            padding: "20px 24px",
            marginBottom: 22,
            boxShadow: "0 2px 8px var(--shadow-color)"
          }}>
            <div>
              <h4 style={{ margin: 0, color: "var(--accent)", fontSize: "1.13rem" }}>{song.title}</h4>
              <div style={{ color: "var(--primary)", fontSize: "0.98rem" }}>{song.artist}</div>
            </div>
            <Link to={`/sing/${song.id}`} className="btn">
              Sing
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SongList;
