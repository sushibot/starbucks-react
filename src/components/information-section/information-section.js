import React from "react";
import image_one from "../../sbs_one.png";
import image_two from "../../sbs_two.png";
import image_three from "../../sbs_three.png";
import InformationItem from "../information-item/information-item";

export default function InformationSection({ title, description }) {
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
          <InformationItem title="Create an account" image={image_one}>
            <p className="font-weight-400">
              To get started,
              <a className="text-underline text-secondary pointer">
                join now.
              </a>{" "}
              You can also
              <a className="text-underline text-secondary pointer">
                Join in the app
              </a>
              to get access to the full range of Sushibucks Rewards benefits.
            </p>
          </InformationItem>
          <InformationItem
            title="Order and pay how you’d like"
            image={image_two}
          >
            <p>
              Use cash, credit/debit card or save some time and pay right
              through the app. You’ll collect Stars all ways.
              <a className="text-underline text-secondary pointer">Learn how</a>
            </p>
          </InformationItem>
          <InformationItem title="Earn stars, get rewards" image={image_three}>
            <p>
              As you earn Stars, you can redeem them for Rewards—like free food,
              drinks, and more. Start redeeming with as little as 25 Stars!
            </p>
          </InformationItem>
        </div>
      </div>
    </>
  );
}
