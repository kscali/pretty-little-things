import React from "react";

export default function AboutUs() {
  return (
    <div className="container about-us">
      <h2>About Us</h2>
      <h4>Thank you for visiting Pretty Little Things.</h4>
      <h4>Pretty Little Things is a duplicate website inspired by Sephora.</h4>
      <h4>Pretty Little Things was built with the following technologies.</h4>
      <ul className="about-us-list">
        <li>Ruby/Rails for the backend.</li>
        <li>Postgres for the database.</li>
        <li>React/Redux for the frontend.</li>
        <li>Bootstrap/css for the styling.</li>
      </ul>
      <h4>
        Pretty Little Things is still under construction but please feel free to
        look around. Add items to your cart, click on some products, and visit
        me on <a href="https://github.com/kscali">Github</a> or{" "}
        <a href="https://www.linkedin.com/in/koy-s-98169a167">
          LinkedIn
        </a>
        .
      </h4>
      <h4>
        Feel free to email me{" "}
        <a href="mailto:kosatun@aol.com" target="_top">
          kosatun@aol.com
        </a>
      </h4>
      <h4>Hope to talk to you soon. -Koy Saeteurn</h4>
    </div>
  );
}
