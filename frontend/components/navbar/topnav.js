import React from "react";
import { Link } from "react-router-dom";
import Title from "./../title";

export default function TopNav() {
  return (
    <div className="ad-div">
      <img
        className="ad"
        src="https://ks-plt.s3-us-west-1.amazonaws.com/2019-04-16-hp-persistent-banner-mday-fragrance-samplebag-SEVENSCENT-us-d-slice.webp"
        alt="ad"
      />
      <div className="top">
        <div className="container">
          <div className="row">
            <div className="col">
              <Title />
            </div>
            <div className="right-top-nav col">
              <a href="#">Reorder</a>
              <a href="#">Track Order</a>
              <a href="#">Find a Store</a>
              {/* <Link to="/store">Find a Store</Link> */}
              <a className="last-a" href="#">
                <h6 className="flag">🇺🇸</h6>
                <p>US</p>
                <p id="span">&#x25bc;</p>
                <ul className="flag-content">
                  <li>
                    <span className="flags">🇨🇦</span>
                    <p id="engs">ENG</p>
                  </li>
                  <li>
                    <span className="flag2">🇨🇦</span>
                    <p id="france">FR</p>
                  </li>
                </ul>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
