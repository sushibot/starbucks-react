import React from "react";

export default function InformationItem({
  image,
  imageStyles,
  title,
  children,
}) {
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
        <div style={imageStyles}>
          <img src={image} style={{ width: "100%" }} />
        </div>
        <h3 className="font-weight-500">{title}</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {children}
        </div>
      </div>
    </>
  );
}
