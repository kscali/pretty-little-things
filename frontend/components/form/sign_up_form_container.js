import { connect } from 'react-redux';
import { signup, clearLoginErrors } from './../../actions/session_actions.js';
import SignUpForm from './sign_up_form';

const mstp = state => ({
  errors: state.errors,
})

const mdtp = dispatch => ({
  processForm: user => dispatch(signup(user)),
  clear: errors => dispatch(clearLoginErrors(errors))
})

export default connect(mstp, mdtp)(SignUpForm);