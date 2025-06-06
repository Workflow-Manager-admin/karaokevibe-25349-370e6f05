import React from "react";
import { useParams, Link } from "react-router-dom";
import "./App.css";

// PUBLIC_INTERFACE
function Singing() {
  /** Singing interface stub: displays static lyrics and stub controls */
  const { id } = useParams();

  // Mock song data lookup (replace/make dynamic in future)
  const songDetails = {
    1: { title: "Shape of You", artist: "Ed Sheeran", lyrics: "I'm in love with the shape of you..." },
    2: { title: "Shallow", artist: "Lady Gaga & Bradley Cooper", lyrics: "I'm off the deep end, watch as I dive in..." },
    3: { title: "Let It Go", artist: "Idina Menzel", lyrics: "Let it go, let it go, can't hold it back anymore..." }
  }[id] || {};

  return (
    <div className="container" style={{ paddingTop: 80, maxWidth: 700 }}>
      <div style={{
        background: "#222", borderRadius: 10, padding: "32px 28px", textAlign: "center",
        boxShadow: "0 2px 8px var(--shadow-color)"
      }}>
        <h2 className="title" style={{ fontSize: "2rem", marginBottom: 4 }}>{songDetails.title || "Unknown Song"}</h2>
        <div className="subtitle" style={{ marginBottom: 18 }}>{songDetails.artist || ""}</div>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "2.1rem",
          minHeight: 100,
          color: "var(--accent)",
          background: "rgba(255,255,255,0.04)",
          borderRadius: 8,
          padding: 18,
          marginBottom: 30,
          lineHeight: 1.4
        }}>
          {songDetails.lyrics || "Lyrics will appear here ..."}
        </div>
        <div style={{ marginBottom: 20 }}>
          <button className="btn btn-large" tabIndex={0} style={{ marginRight: 18 }} aria-label="Record (stub)">
            🎤 Record
          </button>
          <button className="btn btn-large" tabIndex={0} aria-label="Stop (stub)">
            ⏹ Stop
          </button>
        </div>
        <div style={{ margin: "22px 0" }}>
          <span style={{ color: "var(--primary)" }}>Voice Filter:</span>
          <select style={{
            marginLeft: 8,
            padding: "8px 14px",
            borderRadius: 6,
            border: "1px solid var(--accent)",
            outline: "none"
          }} aria-label="Select voice filter">
            <option>None</option>
            <option>Echo</option>
            <option>Auto-Tune</option>
            <option>Robot</option>
          </select>
        </div>
        <div style={{ marginTop: 36 }}>
          <div style={{ marginBottom: 14, color: "var(--text-secondary)" }}>(Playback & sharing stubs)</div>
          <button className="btn" aria-label="Playback (stub)" style={{ marginRight: 10 }}>▶️ Playback</button>
          <button className="btn" aria-label="Save recording (stub)" style={{ marginRight: 10 }}>💾 Save</button>
          <button className="btn" aria-label="Share (stub)">🔗 Share</button>
        </div>
        <div style={{ marginTop: 28 }}>
          <Link to="/songs" className="btn" style={{ background: "var(--secondary)", color: "var(--accent)", border: "1px solid var(--accent)" }}>
            Back to Song List
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Singing;
