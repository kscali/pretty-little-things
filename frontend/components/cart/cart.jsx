import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./cart_item";
import Checkout from "./checkout";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.getQuantity = this.getQuantity.bind(this);
    this.shipping = this.shipping.bind(this);
    this.getRecommendations = this.getRecommendations.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCartItems();
  }

  shipping() {
    let totalAmount = 0;
    this.props.cartItems.forEach(item => {
      let product = this.props.products[item.product_id - 1];

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

  getRecommendations() {
    let products = this.props.products.map((product, i) => {
      return (
        <div key={i}>
          <Link to={`/products/${product.id}`}>
            <img src={product.image_url[0]} alt="makeup" />
            <h6>{product.brand_name}</h6>
            <p className="dot">{product.name}</p>
          </Link>
        </div>
      );
    });

    let randomProducts = [];

    while (randomProducts.length < 10) {
      let random = Math.floor(Math.random() * products.length);
      randomProducts.push(products[random]);
    }

    return randomProducts;
  }

  render() {
    let quantity = this.getQuantity();
    let total = this.shipping();
    let tax = total === 0 ? "TBD" : (total * 0.1).toFixed(2);
    let shipping;
    let price;
    let estimatedTotal;

    if (total > 50) {
      shipping = "You qualify for free shipping.";
      price = "FREE";
      estimatedTotal = (Number(total) + Number(tax)).toFixed(2);
    } else if (total > 0 && total < 50) {
      shipping = `You have $${50 - total} left for free shipping`;
      price = 5.99;
      estimatedTotal = (Number(total) + Number(tax) + Number(price)).toFixed(2);
    } else {
      shipping = "Order $50 or more to qualify for free shipping";
      price = "TBD";
      estimatedTotal = "TBD";
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
                  <div id="rec-for-u" className="slider">
                    {this.getRecommendations()}
                  </div>
                </div>
              </div>
            </div>

            <div className="right-side">
              <Checkout
                total={total}
                price={price}
                tax={tax}
                estimatedTotal={estimatedTotal}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
