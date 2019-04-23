import { connect } from 'react-redux';
import Hair from './hair';
import { getHair } from './../../reducers/selectors';
import { fetchProducts } from './../../actions/product_actions';
import { fetchBrands } from './../../actions/brand_actions';

const mstp = state => ({
  hair: getHair(state)
})

const mdtp = dispatch => ({
  fetchBrands: () => dispatch(fetchBrands()),
  fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mstp, mdtp)(Hair);