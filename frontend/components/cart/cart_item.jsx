import React from "react";
import { Link } from "react-router-dom";
const uuidv4 = require("uuid/v4");

class CartItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      user_id: props.userId,
      product_id: null,
      quantity: props.quantity
    };

    this.removeProduct = this.removeProduct.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.props.fetchProducts();
    this.props.props.fetchCartItems();
  }

  // componentDidUpdate() {
  //   this.props.props.cartItems.forEach(item => {
  //     document.getElementById("selector-2").value = item.quantity;
  //   });
  // }

  // This is getting passed into onClick handler Remove button
  handleChange(item) {
    return e => {
      this.setState(
        {
          id: item.id,
          product_id: item.product_id,
          quantity: e.currentTarget.value
        },
        () => this.props.updateCartItem(this.state)
      );
    };
  }

  removeProduct(item) {
    return () => {
      //  let amount = +document.getElementById("selector-2").value;
      this.props.props.deleteCartItem(item.id);
    };
  }

  render() {
    return (
      <div className="items-list">
        {this.props.quantity === 0 ? (
          <img
            className="sad-cart"
            src="https://ks-plt.s3-us-west-1.amazonaws.com/45d64f50cefa2963667dfb094c1cb1e5.png"
            alt="cart"
          />
        ) : (
          <ul>
            {this.props.props.cartItems.map((item, i) => {
              let product = this.props.props.products.filter(
                product => product.id === item.product_id
              );

              return (
                <li key={uuidv4()}>
                  <div className={`div-li div-${i}`}>
                    <Link to={`/products/${product[0].id}`}>
                      <img src={product[0].image_url[0]} alt="makeup" />
                    </Link>
                    <div className="li-div">
                      <h6>{product[0].brand_name}</h6>
                      <p>{product[0].name}</p>
                      <p>{product[0].size}</p>
                      <p>COLOR: {product[0].color[0]}</p>
                    </div>
                    <div className="con-1 container">
                      <p className="quantity">quantity:</p>
                      <select
                        id="selector-2"
                        value={item.quantity}
                        onChange={this.handleChange(item)}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>

                    <h6 className="price-li">${product[0].price}</h6>
                    <button
                      onClick={this.removeProduct(item)}
                      className="con-2 remove-btn"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default CartItem;
