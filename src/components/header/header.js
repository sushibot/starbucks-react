import React from "react";

export default function Header({ className, children }) {
  return (
    <header className={className}>
      {children}
      <section
        style={{
          backgroundColor: "var(--primary-100)",
          height: "45px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "1440px",
            width: "100%",
            padding: "0 2rem",
          }}
        >
          <p className="text-white font-weight-700 text-uppercase">
            Sushibucks Rewards
          </p>
        </div>
      </section>
    </header>
  );
}
