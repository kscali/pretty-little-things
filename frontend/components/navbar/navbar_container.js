import { connect } from 'react-redux';
import MainNav from './main_nav';
import { logout } from './../../actions/session_actions.js';
import { fetchProducts } from './../../actions/product_actions';

const mstp = state => ({
  user: state.entities.users[state.session.id],
  products: Object.values(state.entities.products)
})

const mdtp = dispatch => ({
  logout: () => dispatch(logout()),
  fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mstp, mdtp)(MainNav);