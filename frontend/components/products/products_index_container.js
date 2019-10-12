import { connect } from 'react-redux';
import ProductsIndex from './products_index';
import { selectAllProducts } from './../../reducers/selectors';

const mstp = state => ({
  products: selectAllProducts(state)
});

export default connect(mstp, null)(ProductsIndex);