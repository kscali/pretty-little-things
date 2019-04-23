import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchProducts } from './../../actions/product_actions';

const mstp = state => ({
  products: Object.values(state.products)
})

const mdtp = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mstp, mdtp)(SearchBar);