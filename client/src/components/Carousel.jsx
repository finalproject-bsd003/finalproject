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
          className="object-cover h-30 w-full"
          alt=""
          style={{ height: "600px", width: "full" }}
          src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2022/08/wedding-gowns-singapore-the-proposal.jpg"
        />
      </div>
      <div>
        <img
          alt=""
          className="object-cover h-30 w-full"
          style={{ height: "600px", width: "full" }}
          src="https://images.unsplash.com/photo-1580385181229-be7e4a9f775a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        />
      </div>
      <div>
        <img
          alt=""
          className="object-cover h-30 w-full"
          style={{ height: "600px", width: "full" }}
          src={pic}
        />
      </div>
    </Carousel>
  </div>
);
