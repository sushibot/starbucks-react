import React from "react";

import image_025 from "../../025.png";
import TabItem from "../tab-item/tab-item";

export default function TabSection() {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--secondary-10)",
          boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.1)",
          zIndex: "1",
          position: "relative",
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
          <ol style={{ display: "flex", width: "600px" }}>
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
          padding: "4rem 0",
          backgroundColor: "var(--primary-10)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            width: "800px",
          }}
        >
          <div style={{ width: "775px" }}>
            <img style={{ width: "100%" }} src={image_025} />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <h3>Customize your drink</h3>
            <p>
              Make your drink just right with an extra espresso shot, dairy
              substitute or a dash of your favorite syrup.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
