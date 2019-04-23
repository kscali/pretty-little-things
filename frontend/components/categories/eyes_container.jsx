import { connect } from 'react-redux';
import Eye from './eye';
import { getEyes } from './../../reducers/selectors';
import { fetchProducts } from './../../actions/product_actions';
import { fetchBrands } from './../../actions/brand_actions';

const mstp = state => ({
  eyes: getEyes(state)
})

const mdtp = dispatch => ({
  fetchBrands: () => dispatch(fetchBrands()),
  fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mstp, mdtp)(Eye);