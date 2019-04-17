import { 
  RECEIVE_ERRORS, 
  RECEIVE_CURRENT_USER, 
  CLEAR_LOGIN_ERRORS 
  } from '../actions/session_actions';


const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER: 
      return [];
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_LOGIN_ERRORS:
      return [];
    default: 
      return state; 
  }
}

export default sessionErrorsReducer; 