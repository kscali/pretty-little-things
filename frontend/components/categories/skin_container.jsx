import { connect } from 'react-redux';
import Skin from './skin';
import { getSkin } from './../../reducers/selectors';
import { fetchProducts } from './../../actions/product_actions';
import { fetchBrands } from './../../actions/brand_actions';

const mstp = state => ({
  skin: getSkin(state)
})

const mdtp = dispatch => ({
  fetchBrands: () => dispatch(fetchBrands()),
  fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mstp, mdtp)(Skin);