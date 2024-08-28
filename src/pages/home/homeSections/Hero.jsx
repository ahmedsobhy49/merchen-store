import React from "react";
import TransparentButton from "../../../components/common/TransparentButton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Hero() {
  const gender = useSelector((state) => state.gender);
  return (
    <section className="h-[48rem] relative min-h-screen ">
      {gender === "men" ? (
        <video
          src="../../../../public/assets/videos/homenewindesktop_2.mp4"
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            height: "100vh",
            width: "100vw",
            objectFit: "cover",
            left: "0",
            right: "0",
            top: "0",
            bottom: "0",
            zIndex: "-1",
          }}
        ></video>
      ) : null}
      <Link to={"/newArrival"}>
        <TransparentButton buttonText={"New in"} />
      </Link>
      <div
        className={`${
          gender === "men" ? "" : "bg-hero-image-women"
        } min-h-screen bg-no-repeat bg-cover bg-center `}
      ></div>
    </section>
  );
}
