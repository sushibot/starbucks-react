import React from "react";

export default function TabItem({ text, isActive }) {
  return (
    <li
      style={{
        padding: "2rem",
        width: "100%",
        borderBottom:
          isActive === "true" ? "4px solid var(--secondary-100)" : "",
      }}
    >
      <button
        className="btn"
        style={{
          background: "transparent",
          border: "none",
        }}
      >
        <span className="font-weight-600" style={{ fontSize: "2.5rem" }}>
          {text}
          <span style={{ fontSize: "1.5rem", color: "#cba258 " }}>★</span>
        </span>
      </button>
    </li>
  );
}
