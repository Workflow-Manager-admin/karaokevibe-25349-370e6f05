import React from "react";
import { useParams, Link } from "react-router-dom";
import "../App.css";

/**
 * PUBLIC_INTERFACE
 * Singing interface stub: displays static lyrics, player, record controls, voice filter selector, and stubs for playback/save/share.
 */
function Singing() {
  const { id } = useParams();

  // Temporary static/dummy song data (replace with import in future)
  const mockSongs = {
    1: { title: "Shape of You", artist: "Ed Sheeran", lyrics: "I'm in love with the shape of you..." },
    2: { title: "Shallow", artist: "Lady Gaga & Bradley Cooper", lyrics: "I'm off the deep end, watch as I dive in..." },
    3: { title: "Let It Go", artist: "Idina Menzel", lyrics: "Let it go, let it go, can't hold it back anymore..." }
  };
  const songDetails = mockSongs[id] || {
    title: "Unknown Song",
    artist: "",
    lyrics: "Lyrics will appear here ..."
  };

  // Voice filter options
  const filterList = [
    { label: "None" },
    { label: "Echo" },
    { label: "Auto-Tune" },
    { label: "Robot" }
  ];

  return (
    <div className="container" style={{ paddingTop: 80, maxWidth: 700 }}>
      <div
        style={{
          background: "linear-gradient(120deg, #191414 70%, #222 100%)",
          borderRadius: 14,
          padding: "38px 28px",
          textAlign: "center",
          boxShadow: "0 2px 14px var(--shadow-color), 0 0 0 3px var(--accent)",
          border: "1px solid var(--primary)"
        }}
        aria-label="Singing interface container"
      >
        <h2
          className="title"
          style={{
            fontSize: "2rem",
            marginBottom: 3,
            letterSpacing: ".02em",
            color: "var(--accent)",
          }}
        >
          {songDetails.title}
        </h2>
        <div className="subtitle" style={{ marginBottom: 18, color: "var(--primary)" }}>
          {songDetails.artist}
        </div>

        {/* Synced Lyrics Area (static placeholder for now) */}
        <section
          aria-label="Synced lyrics area"
          style={{
            minHeight: 110,
            color: "var(--accent)",
            fontFamily: "'Inter', sans-serif",
            fontSize: "2rem",
            fontWeight: 500,
            background: "rgba(32,32,32,0.34)",
            borderRadius: 7,
            padding: 22,
            marginBottom: 36,
            letterSpacing: ".005em",
            boxShadow: "0 1px 6px var(--shadow-color)"
          }}
        >
          {songDetails.lyrics}
        </section>

        {/* Instrumental playback controls */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 18,
          marginBottom: 16
        }}>
          <button className="btn btn-large" style={{ background: "var(--primary)", color: "var(--secondary)" }} aria-label="Play instrumental (stub)">
            ▶️ Play Instrumental
          </button>
          <button className="btn btn-large" style={{ background: "#393939" }} aria-label="Stop instrumental (stub)">
            ⏹ Stop
          </button>
        </div>

        {/* Record Button */}
        <div style={{
          marginBottom: 20, marginTop: 3, display: "flex", justifyContent: "center", gap: 18
        }}>
          <button className="btn btn-large" tabIndex={0}
            aria-label="Record (stub)"
            style={{ background: "var(--accent)", color: "#191414", fontWeight: 700, filter: "brightness(1.12)", boxShadow: "0 2px 8px var(--shadow-color)" }}>
            🎤 Record
          </button>
        </div>

        {/* Voice Filter Dropdown */}
        <div style={{
          margin: "30px 0 6px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <span style={{ color: "var(--primary)", fontWeight: 500, fontSize: "1.09rem" }}>Voice Filter:</span>
          <select
            style={{
              marginLeft: 10,
              padding: "9px 16px",
              borderRadius: 7,
              border: "1.5px solid var(--accent)",
              outline: "none",
              background: "#101010",
              color: "var(--text-color)",
              fontSize: "1.03rem"
            }}
            aria-label="Select voice filter"
            defaultValue="None"
            disabled
          >
            {filterList.map(({ label }) =>
              <option key={label}>{label}</option>
            )}
          </select>
          <span style={{
            marginLeft: 9, color: "var(--text-secondary)", fontSize: "0.96rem"
          }}>
            (stub)
          </span>
        </div>

        {/* Playback/Save/Share Placeholders */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 11,
          marginTop: 38
        }}>
          <span style={{
            color: "var(--text-secondary)",
            fontSize: "1.01rem",
            marginBottom: 0
          }}>
            Playback & Save/Share Controls (stubs)
          </span>
          <div style={{ display: "flex", gap: 10 }}>
            <button className="btn" aria-label="Playback (stub)" style={{ background: "var(--primary)", color: "var(--secondary)" }}>
              ▶️ Playback
            </button>
            <button className="btn" aria-label="Save recording (stub)" style={{ background: "var(--accent)", color: "#191414", fontWeight: 600 }}>
              💾 Save
            </button>
            <button className="btn" aria-label="Share (stub)" style={{ background: "#292929", color: "var(--accent)" }}>
              🔗 Share
            </button>
          </div>
        </div>

        <div style={{ marginTop: 38 }}>
          <Link to="/songs" className="btn"
            style={{
              background: "var(--secondary)",
              color: "var(--accent)",
              border: "1.4px solid var(--accent)",
              fontWeight: 500
            }}>
            Back to Song List
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Singing;
