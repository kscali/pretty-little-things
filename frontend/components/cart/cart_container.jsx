import { connect } from "react-redux";
import {
  fetchCartItems,
  updateCartItem,
  deleteCartItem,
  deleteAllCartItems
} from "./../../actions/cart_actions";

import Cart from "./cart";
import { fetchProducts, fetchProduct } from "./../../actions/product_actions";

const mstp = state => {
  let cartItems = Object.values(state.entities.cart);
  let products = Object.values(state.entities.products);

  return { cartItems, products };
};

const mdtp = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchCartItems: () => dispatch(fetchCartItems()),
  updateCartItem: item => dispatch(updateCartItem(item)),
  deleteCartItem: id => dispatch(deleteCartItem(id)),
  deleteAllCartItems: () => dispatch(deleteAllCartItems()),
  fetchProduct: id => dispatch(fetchProduct(id))
});

export default connect(
  mstp,
  mdtp
)(Cart);
