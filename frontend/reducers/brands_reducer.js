import { RECEIVE_BRANDS, RECEIVE_BRAND } from "../actions/brand_actions";
import merge from 'lodash/merge';

const brandsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BRANDS:
      return merge({}, state, action.brands)
    case RECEIVE_BRAND:
      return merge({}, state, { [action.brand.id]: action.brand })
    default:
      return state;
  }
}

export default brandsReducer;