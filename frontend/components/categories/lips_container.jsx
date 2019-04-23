import { connect } from 'react-redux';
import Lip from './lip';
import { getLips } from './../../reducers/selectors';
import { fetchProducts } from './../../actions/product_actions';
import { fetchBrands } from './../../actions/brand_actions';

const mstp = state => ({
  lips: getLips(state)
})

const mdtp = dispatch => ({
  fetchBrands: () => dispatch(fetchBrands()),
  fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mstp, mdtp)(Lip);