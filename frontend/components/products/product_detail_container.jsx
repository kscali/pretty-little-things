import { connect } from 'react-redux';
import ProductDetail from './product_detail';
import { fetchProduct } from './../../actions/product_actions';
import { fetchCartItems, createCartItem } from './../../actions/cart_actions';

const mstp = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.productId],
  cart: state.entities.cart, 
  products: Object.values(state.entities.products)
})

const mdtp = dispatch => ({
  fetchProduct: (id) =>  dispatch(fetchProduct(id)),
  fetchCartItems: () => dispatch(fetchCartItems()),
  createCartItem: item => dispatch(createCartItem(item))

})

export default connect(mstp, mdtp)(ProductDetail);