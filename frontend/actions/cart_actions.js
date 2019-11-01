import * as ApiUtil from "./../util/cart_util";

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const REMOVE_ALL_CART_ITEMS = "REMOVE_ALL_CART_ITEMS";
export const RECEIVE_CART_ERRORS = "RECEIVE_CART_ERRORS";

export const receiveCartItems = items => ({
  type: RECEIVE_CART_ITEMS,
  items
});

export const removeCartItem = id => ({
  type: REMOVE_CART_ITEM,
  id
});

export const removeAllCartIems = () => ({
  type: REMOVE_ALL_CART_ITEMS
});


export const fetchCartItems = () => dispatch =>
  ApiUtil.fetchCartItems().then(items => dispatch(receiveCartItems(items)));

export const createCartItem = item => dispatch =>
  ApiUtil.createCartItem(item).then(items => dispatch(receiveCartItems(items)));
//  (errors) => dispatch(receiveCartErrors(errors)) )

export const updateCartItem = item => dispatch =>
  ApiUtil.updateCartItem(item).then(items => dispatch(receiveCartItems(items)));
// (errors) => dispatch(receiveCartErrors(errors)))

export const deleteCartItem = id => dispatch =>
  ApiUtil.deleteCartItem(id).then(item => dispatch(removeCartItem(item.id)));

export const deleteAllCartItems = items => dispatch =>
  ApiUtil.deleteAllCartItems(items).then(() => dispatch(removeAllCartIems()));
