import React from "react";
import { Link } from "react-router-dom";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.applyCode = this.applyCode.bind(this);
  }

  applyCode(e) {
    if (e.key === "Enter" && e.currentTarget.value === "SEVENSCENT") {
      this.setState({ value: e.currentTarget.value });
      e.currentTarget.value = "";
    }
  }

  render() {
    let { total, price, tax, estimatedTotal } = this.props;

    let placeholderValue = null;
    if (this.state.value === "SEVENSCENT" && estimatedTotal < 35) {
      placeholderValue = "Can't apply discount code";
    } else if (this.state.value === "SEVENSCENT" && estimatedTotal >= 35) {
      placeholderValue = "Code SEVENSCENT applied";
    } else {
      placeholderValue = "Please enter promo code";
    }

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
          onKeyPress={this.applyCode}
          className="ckout-input"
          type="text"
          placeholder={placeholderValue}
        />
        <div className="mini-divider" />
        <button className="ckout">
          <Link to="/thankyou">CHECKOUT</Link>
        </button>
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
}

export default Checkout;
