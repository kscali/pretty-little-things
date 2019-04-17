import * as ApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_LOGIN_ERRORS = "CLEAR_LOGIN_ERRORS";
export const CLEAR = "CLEAR";

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

export const clearLoginErrors = (errors) => ({
  type: CLEAR_LOGIN_ERRORS,
  errors
})

export const clearupErrors = (errors) => ({
  type: CLEAR,
  errors 
})

export const login = user => dispatch => (
  ApiUtil.login(user).then(user => dispatch(receiveCurrentUser(user)), 
  error => { 
  dispatch(receiveErrors(error.responseJSON))
  })
)

export const logout = () => dispatch => (
  ApiUtil.logout().then(() => dispatch(logoutCurrentUser()))
)

export const signup = user => dispatch => (
  ApiUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)),
    error => {
      dispatch(receiveErrors(error.responseJSON))
    })
)

export const clearLogErrors = (user) => (
  ApiUtil.login(user).then(user => dispatch(receiveCurrentUser(user)),
    errors => {
      dispatch(clearLoginErrors(errors.responseJSON))
    })
)

export const clear = (user) => (
  ApiUtil.login(user).then(user => dispatch(receiveCurrentUser(user)),
    errors => {
      dispatch(clearupErrors(errors.responseJSON))
    })
)

