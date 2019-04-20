import { connect } from 'react-redux';
import ProductDetail from './product_detail';
import { fetchProduct } from './../../actions/product_actions';

const mstp = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.productId]
})

const mdtp = dispatch => ({
  fetchProduct: (id) =>  dispatch(fetchProduct(id))

})

export default connect(mstp, mdtp)(ProductDetail);