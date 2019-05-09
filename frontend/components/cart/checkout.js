import React from "react";

export default function Checkout({ total, price, tax, estimatedTotal }) {
  return (
    <div className="container">
      <h6>Order Summary</h6>
      <div>
        <span>Merchandise subtotal</span>
        <b>${total}</b>
      </div>
      <div>
        <span>Shipping & Handling</span>
        <p id="shipHandle">${price}</p>
      </div>
      <div>
        <span>Tax</span>
        <b>${tax}</b>
      </div>
      <div className="mini-divider" />
      <div className="total">
        <span>Estimated total</span>
        <b>${estimatedTotal}</b>
      </div>
      <div className="mini-divider" />
      <input
        className="ckout-input"
        type="text"
        placeholder="Promo or reward code"
      />
      <div className="mini-divider" />
      <button className="ckout">CHECKOUT</button>
      <div className="pp">
        <a href="https://www.paypal.com/us/home">
          <img
            className="paypal"
            src="https://d12m9erqbesehq.cloudfront.net/wp-content/uploads/2016/10/27151552/paypal-express-checkout-logo-300x125.png"
            alt="paypal"
          />
        </a>
      </div>
    </div>
  );
}
