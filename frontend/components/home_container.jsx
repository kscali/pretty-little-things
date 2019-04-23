import { connect } from 'react-redux';
import Home from './Home';
import { fetchProducts } from './../actions/product_actions';

const mstp = state => ({
  products: Object.values(state.products)
})

const mdtp = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mstp, mdtp)(Home);