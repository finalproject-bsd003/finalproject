import React from "react";
import { Carousel } from "react-responsive-carousel";
import pic from "../assets/Screenshot 2023-07-27 at 14.19.14.png";

export default () => (
  <div>
    <Carousel
      autoPlay
      showThumbs={false}
      thumbWidth="5%"
      thumbHeight="5%"
      showStatus={false}
      transitionTime={10}
      style={{ height: "600px" }}
      backgroundPosition="center"
    >
      <div>
        <img
          alt=""
          className="object-cover h-30 w-full"
          style={{ height: "650px", width: "full", filter: "brightness(90%)" }}
          src={pic}
        />
      </div>
      <div>
        <img
          className="object-cover h-30 w-full"
          alt=""
          style={{ height: "650px", width: "full", filter: "brightness(90%)" }}
          src="https://images.unsplash.com/photo-1519379169146-d4b170447caa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        />
      </div>
      <div>
        <img
          alt=""
          className="object-cover h-30 w-full"
          style={{ height: "650px", width: "full", filter: "brightness(90%)" }}
          src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        />
      </div>
    </Carousel>
  </div>
);
