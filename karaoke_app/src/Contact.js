import React from "react";
import "./App.css";

// PUBLIC_INTERFACE
function Contact() {
  /** Contact/feedback stub page */
  return (
    <div className="container" style={{ paddingTop: 100, maxWidth: 600 }}>
      <h2 className="title" style={{ fontSize: "2rem" }}>Contact Us</h2>
      <div className="description" style={{ marginBottom: 24 }}>
        We’d love your feedback or questions on KaraokeVibe!<br />
        (This form is a stub; sending is not active.)
      </div>
      <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <input
          type="text"
          placeholder="Your Name"
          aria-label="Your Name"
          style={{ padding: 12, fontSize: "1rem", borderRadius: 5, border: "1px solid var(--accent)" }}
          disabled
        />
        <input
          type="email"
          placeholder="Your Email"
          aria-label="Your Email"
          style={{ padding: 12, fontSize: "1rem", borderRadius: 5, border: "1px solid var(--accent)" }}
          disabled
        />
        <textarea
          placeholder="Message"
          aria-label="Message"
          rows={4}
          style={{ padding: 12, fontSize: "1rem", borderRadius: 5, border: "1px solid var(--accent)" }}
          disabled
        />
        <button className="btn" type="button" disabled>
          Send (stub)
        </button>
      </form>
    </div>
  );
}

export default Contact;
