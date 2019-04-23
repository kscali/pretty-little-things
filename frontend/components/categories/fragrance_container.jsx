import { connect } from 'react-redux';
import Fragrance from './fragrance';
import { getFragrances } from './../../reducers/selectors';
import { fetchProducts } from './../../actions/product_actions';
import { fetchBrands } from './../../actions/brand_actions';

const mstp = state => ({
  fragrances: getFragrances(state)
})

const mdtp = dispatch => ({
  fetchBrands: () => dispatch(fetchBrands()),
  fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mstp, mdtp)(Fragrance);
