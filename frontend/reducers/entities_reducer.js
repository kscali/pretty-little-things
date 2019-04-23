import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import productsReducer from './products_reducer';
import brandsReducer from './brands_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  brands: brandsReducer
})

export default entitiesReducer; 