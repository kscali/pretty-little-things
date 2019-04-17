import { connect } from 'react-redux'; 
import LogInForm from './login_form';
import { login, clearLoginErrors } from './../../actions/session_actions';


const mstp = state => ({
  errors: state.errors
})

const mdtp = dispatch => ({
  login: user => dispatch(login(user)),
  clearErrors: errors => dispatch(clearLoginErrors(errors))
})

export default connect(mstp, mdtp)(LogInForm);