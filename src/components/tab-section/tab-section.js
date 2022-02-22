import React from "react";
import TabItem from "../tab-item/tab-item";

export default function TabSection() {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--secondary-10)",
          boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          className="page-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            padding: "4rem 0 0 0",
          }}
        >
          <h2>Get your favorites for free</h2>
          <ol style={{ display: "flex", gap: "1.5rem" }}>
            <TabItem text="25" isActive="true" />
            <TabItem text="50" />
            <TabItem text="150" />
            <TabItem text="200" />
            <TabItem text="400" />
          </ol>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "var(--primary-10)",
          display: "flex",
          gap: "1rem",
        }}
      ></div>
    </>
  );
}
