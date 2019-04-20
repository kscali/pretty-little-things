import * as ApiUtil from '../util/product_util';

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products 
})

export const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
})

export const fetchProducts = () => dispatch => (
  ApiUtil.fetchProducts().then(products => dispatch(receiveProducts(products)))
)

export const fetchProduct = (id) => dispatch => (
  ApiUtil.fetchProduct(id).then(product => dispatch(receiveProduct(product)))
)