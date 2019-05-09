import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./cart_item";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.getQuantity = this.getQuantity.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCartItems();
  }

  shipping() {
    let that = this;
    let totalAmount = 0;
    this.props.cartItems.forEach(item => {
      let product = this.props.products[item.product_id - 1];
      // if (product === undefined ) debugger;
      that;
      totalAmount += item.quantity * product.price;
    });
    return totalAmount;
  }

  getQuantity() {
    let quantity = 0;
    this.props.cartItems.forEach(item => {
      quantity += item.quantity;
    });
    return quantity;
  }

  render() {
    let quantity = this.getQuantity();
    let total = this.shipping();
    let shipping;
    let price;
    if (total > 50) {
      shipping = "You qualify for free shipping.";
      price = "FREE";
    } else if (total > 0) {
      shipping = `You have $${50 - total} left for free shipping`;
      price = "TBD";
    } else {
      shipping = "Order $50 or more to qualify for free shipping";
      price = "TBD";
    }

    return (
      <div className="main-basket container">
        <div>
          <h4>My Basket</h4>
          <p id="shipping">{shipping}</p>
          <Link to="/products">Continue Shopping ></Link>
        </div>
        <div className="full-box">
          <div className="left-side">
            <div className="divider" />
            <div className="basket-list">
              <div className="basket-list-items">
                <h6>Items in basket ({quantity}) </h6>

                <div className="inner-item">
                  <CartItem props={this.props} />
                </div>

                <h5 className="h">Recommended for You</h5>
                <div className="caro">
                  <div id="rec-for-u" className=" slider">
                    <div>
                      <Link to="/products/1">
                        <img src="https://www.sephora.com/productimages/sku/s1901008-main-grid.jpg" />
                        <h6>Tarte</h6>
                        <p className="dot">12-hr clay blush</p>
                      </Link>
                    </div>
                    <div>
                      <Link to="/products/9">
                        <img src="https://www.sephora.com/productimages/sku/s2182111-main-grid.jpg" />
                        <h6>ANASTASIA</h6>
                        <p className="gel">DIPBROW gel</p>
                      </Link>
                    </div>
                    <div>
                      <Link to="/products/6">
                        <img src="https://www.sephora.com/productimages/sku/s1233147-main-grid.jpg" />
                        <h6>Viktor&Rolfe</h6>
                        <p className="gel">Flowerbomb</p>
                      </Link>
                    </div>
                    <div>
                      <Link to="/products/11">
                        <img src="https://www.sephora.com/productimages/sku/s2181006-main-grid.jpg" />
                        <h6>TATCHA</h6>
                        <p className="gel">Dewy Skin Cream</p>
                      </Link>
                    </div>
                    <div>
                      <Link to="/products/12">
                        <img src="https://www.sephora.com/productimages/sku/s2211167-main-grid.jpg" />
                        <h6>FRESH</h6>
                        <p className="gel">Sleeping Mask</p>
                      </Link>
                    </div>
                    <div>
                      <Link to="/products/13">
                        <img src="https://www.sephora.com/productimages/sku/s1162650-main-grid.jpg" />
                        <h6>Dior</h6>
                        <p className="gel">Dior Lip Glow</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="container">
                <h6>Order Summary</h6>
                <div>
                  <span>Merchandise subtotal</span>
                  <b>${total}</b>
                </div>
                <div>
                  <span>Shipping & Handling</span>
                  <p id="shipHandle">{price}</p>
                </div>
                <div>
                  <span>Tax</span>
                  <b>TBD</b>
                </div>
                <div className="mini-divider" />
                <div className="total">
                  <span>Estimated total</span>
                  <b>${total > 50 ? total : total === 0 ? 0 : total}</b>
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
                      width="225"
                      height="80"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
