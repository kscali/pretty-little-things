import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from './../actions/session_actions';

const mstp = state => ({
  user: state.entities.users[state.session.id]
})

const mdtp = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mstp, mdtp)(Greeting);