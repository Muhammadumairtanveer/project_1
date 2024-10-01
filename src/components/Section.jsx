import React from "react";
import Umair from "../assets/pic1.jpg"

const Section = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            `url(${Umair})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
            <p className="mb-5">
              Welcome to our clothing shop! We offer stylish, affordable, and
              high-quality apparel for all occasions. Discover the latest trends
              and elevate your wardrobe with our unique collection. Shop now!
            </p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
