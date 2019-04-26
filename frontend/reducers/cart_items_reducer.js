import { 
  RECEIVE_CART_ITEMS, 
  REMOVE_CART_ITEM, 
  REMOVE_ALL_CART_ITEMS 
} from './../actions/cart_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from './../actions/session_actions';
import merge from 'lodash/merge';

const cartReducer = (state = {}, action) => {
  Object.freeze(state) 

  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER: 
      if (!action.user.cart_items) {
        return {};
      } else {
        return action.user.cart_items
      }
    case RECEIVE_CART_ITEMS: 
      newState = merge({}, state, action.items);
      return newState;
    case LOGOUT_CURRENT_USER: 
      return {};
    case REMOVE_CART_ITEM:
       newState = merge({}, state);
       delete newState[action.id]
       return newState; 
    case REMOVE_ALL_CART_ITEMS:
      return {};
    default: 
      return state; 
  }
}

export default cartReducer;