import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./carousel";

const Home = () => {
  return (
    <div className="homepage">
      <div className="container">
        <Link to="/products">
          <img
            className="home-ad"
            src="https://ks-plt.s3-us-west-1.amazonaws.com/2019-04-16-hp-slide-just-arrived-cyoa-us-d-slice.webp"
            alt="shopping"
          />
        </Link>
      </div>
      <div className="sec-section container">
        <h2>Just Arrived</h2>
      </div>
      <div className="container">
        <Carousel />
      </div>
      <div className="container">
        <div className="ad-images">
          <iframe
            width="860"
            height="615"
            src="https://www.youtube.com/embed/2IT4q6vjN8Q?autoplay=1&loop=1&mute=1"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="third-section container">
        <h2>Recommended For You</h2>
      </div>
      <div className="container carousel-container">
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
