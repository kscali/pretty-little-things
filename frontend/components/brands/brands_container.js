import { fetchBrands } from './../../actions/brand_actions';
import { connect } from 'react-redux';
import Brands from './brands';

const mstp = state => ({
  brands: Object.values(state.entities.brands)
})

const mdtp = dispatch => ({
  fetchBrands: () => dispatch(fetchBrands())
})

export default connect(mstp, mdtp)(Brands);