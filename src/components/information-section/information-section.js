import React from "react";
import image_one from "../../sbs_one.png";
import image_two from "../../sbs_two.png";
import image_three from "../../sbs_three.png";
import InformationItem from "../information-item/information-item";

export default function InformationSection({ title, description, children }) {
  return (
    <>
      <div
        className="page-container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5rem",
          marginTop: "14rem",
          marginBottom: "12rem",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto",
            gap: "9rem",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}
