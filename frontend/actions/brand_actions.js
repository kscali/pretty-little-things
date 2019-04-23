import * as ApiUtil from '../util/brand_util';

export const RECEIVE_BRANDS = "RECEIVE_BRANDS";
export const RECEIVE_BRAND = "RECEIVE_BRAND";

export const receiveBrands = brands => ({
  type: RECEIVE_BRANDS,
  brands
})

export const receiveBrand = brand => ({
  type: RECEIVE_BRAND,
  brand
})

export const fetchBrands = () => dispatch => (
  ApiUtil.fetchBrands().then(brands => dispatch(receiveBrands(brands)))
)

export const fetchBrand = (id) => dispatch => (
  ApiUtil.fetchBrand(id).then(brand => dispatch(receiveBrand(brand)))
)