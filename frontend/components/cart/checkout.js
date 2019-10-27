import React from "react";
import { Link } from "react-router-dom";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      placeholderValue: "Please Enter Promo Code",
      estimatedTotal: this.props.estimatedTotal
    };

    this.applyCode = this.applyCode.bind(this);
    this.applyCodeEnter = this.applyCodeEnter.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  applyCodeEnter(e) {
   if ( e.key === "Enter" ) {
      this.applyCode();
    }
  }

  applyCode() {
  
    if (this.state.value.toUpperCase() === "SEVENSCENT" && this.state.estimatedTotal < 35) {
      this.setState({placeholderValue: "Can't apply code. Add more items to cart."});
    } else if (this.state.value.toUpperCase() === "SEVENSCENT" && this.state.estimatedTotal >= 35) {
      this.setState({placeholderValue: "Code SEVENSCENT applied"});
    } else {
      this.setState({placeholderValue: "Please enter promo code"});
    }
    this.setState({value: ""});
   
  }

  handleChange(e) {
    this.setState({value: e.currentTarget.value});
  }

  render() {
    let { total, price, tax, estimatedTotal } = this.props;
    
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
          onKeyPress={this.applyCodeEnter}
          className="ckout-input"
          type="text"
          placeholder={this.state.placeholderValue}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="discount-btn" onClick={this.applyCode}>
          Apply discount code
        </button>
        <div className="mini-divider" />
        <button className="ckout">
          <Link to="/thankyou">CHECKOUT</Link>
        </button>
        <div className="pp">
          <a href="https://www.paypal.com/us/home" target="_blank">
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
