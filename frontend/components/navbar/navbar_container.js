import { connect } from 'react-redux';
import MainNav from './main_nav';
import { logout } from './../../actions/session_actions.js';

const mstp = state => ({
  user: state.entities.users[state.session.id]
})

const mdtp = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mstp, mdtp)(MainNav);