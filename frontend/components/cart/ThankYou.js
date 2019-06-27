import React from "react";

const ThankYou = () => {
  return (
    <div className="thankyou-gif-div">
      <div className="gifs-container">
        <img
          className="thankyou-gif"
          src="https://ks-plt.s3-us-west-1.amazonaws.com/products/plt-images/Delivery-GIF.gif"
        />
        <img
          className="thankyou-gif"
          src="https://ks-plt.s3-us-west-1.amazonaws.com/products/plt-images/Delivery-GIF.gif"
        />
        <img
          className="thankyou-gif"
          src="https://ks-plt.s3-us-west-1.amazonaws.com/products/plt-images/Delivery-GIF.gif"
        />
        <img
          className="thankyou-gif"
          src="https://ks-plt.s3-us-west-1.amazonaws.com/products/plt-images/Delivery-GIF.gif"
        />
        <img
          className="thankyou-gif"
          src="https://ks-plt.s3-us-west-1.amazonaws.com/products/plt-images/Delivery-GIF.gif"
        />
      </div>
      <div className="container thank-you">
        <h2>Your order is on it's way!</h2>
        <h6>
          Wait! At least that's what it would say if you had placed an order.
        </h6>
        <h6>Thank you so much for visiting Pretty Little Things.</h6>
        <h6>I hope you had the chance to browse the site.</h6>
        <h6>
          Pretty Little Things was built with Rails technology on the backend
          and React/Redux on the front end.
        </h6>
        <h6>
          Please feel free to contact me at{" "}
          <a href="mailto:kosatun@aol.com">kosatun@aol.com</a>
        </h6>
        <h6>
          Or visit me on{" "}
          <a href="https://www.linkedin.com/in/koy-saeteurn-98169a167">
            LinkedIn
          </a>
        </h6>
      </div>
    </div>
  );
};

export default ThankYou;
