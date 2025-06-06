import React from "react";
import "../App.css";

// PUBLIC_INTERFACE
function Home() {
  /** Home page introducing KaraokeVibe and encouraging song exploration. */
  return (
    <div className="container">
      <div className="hero">
        <div className="subtitle">Experience Karaoke, The Modern Way</div>
        <h1 className="title">KaraokeVibe</h1>
        <div className="description">
          Sing along, record your voice, and apply fun effects on your favorite tracks.<br />
          Browse our curated karaoke song collection and get started!
        </div>
        <a href="/songs" className="btn btn-large">
          Browse Songs
        </a>
      </div>
    </div>
  );
}

export default Home;
