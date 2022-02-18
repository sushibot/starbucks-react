import React from "react";

export default function Header({ className, children }) {
  return (
    <>
      <header className={className}>
        {children}
        <section
          style={{
            backgroundColor: "var(--primary-100)",
            height: "50px",
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
            }}
          >
            <p className="text-white font-weight-700 text-uppercase">
              Starbucks® Rewards
            </p>
          </div>
        </section>
      </header>
    </>
  );
}
