import { connect } from 'react-redux';
import { fetchProducts } from './../../actions/product_actions';
import ProductsIndex from './products_index';
import { selectAllProducts } from './../../reducers/selectors';

const mstp = state => ({
  products: selectAllProducts(state)
})

const mdtp = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mstp, mdtp)(ProductsIndex);