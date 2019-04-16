import { connect } from 'react-redux'; 
import LogInForm from './login_form';
import { login } from './../../actions/session_actions';


const mstp = state => ({
  errors: state.errors
})

const mdtp = dispatch => ({
  login: user => dispatch(login(user))
})

export default connect(mstp, mdtp)(LogInForm);