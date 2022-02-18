import React from "react";
import image from "../../coffee.jpg";
import Button from "../button/button";

export default function Hero() {
  return (
    <>
      <div
        style={{
          backgroundSize: "cover",
          position: "relative",
          minHeight: "83vh",
          backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),url(${image})`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "1rem",
          }}
        >
          <h1 className="text-white text-uppercase font-weight-500">
            Free coffee is a tap away
          </h1>
          <p className="text-white">Join now to start earning rewards</p>
          <div>
            <Button className="btn btn-primary" text="Join now" />
          </div>
          <p className="text-white">
            Or{" "}
            <a className="text-white pointer text-underline">join in the app</a>{" "}
            for the best experience
          </p>
        </div>
      </div>
    </>
  );
}
