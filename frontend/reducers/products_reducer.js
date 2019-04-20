import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT} from "../actions/product_actions";
import merge from 'lodash/merge';

const productsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PRODUCTS: 
      return merge({}, state, action.products)
    case RECEIVE_PRODUCT: 
      debugger 
      return merge({}, state, { [action.product.id]: action.product })
    default: 
      return state; 
  }
}

export default productsReducer;