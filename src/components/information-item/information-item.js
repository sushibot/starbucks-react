import React from "react";

export default function InformationItem({ image, title, children }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: "1.75rem",
        }}
      >
        <div style={{ width: "50px" }}>
          <img src={image} style={{ width: "100%" }} />
        </div>
        <h3 className="font-weight-500">{title}</h3>
        {children}
      </div>
    </>
  );
}
