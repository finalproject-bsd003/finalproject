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
    >
      <div>
        <img
          alt=""
          className="object-cover h-30 w-full"
          style={{ height: "600px", width: "full" }}
          src={pic}
        />
      </div>
      <div>
        <img
          className="object-cover h-30 w-full"
          alt=""
          style={{ height: "600px", width: "full" }}
          src="https://www.estylecdn.com/manufcols/pronovias/current/zoom/ILONA_B.jpg"
        />
      </div>
      <div>
        <img
          alt=""
          className="object-cover h-30 w-full"
          style={{ height: "600px", width: "full" }}
          src="https://i.etsystatic.com/18694010/r/il/990a6a/4830752631/il_fullxfull.4830752631_7ks0.jpg"
        />
      </div>
    </Carousel>
  </div>
);
