// export const get all lips
export const getLips = state => {
  let products = Object.values(state.entities.products);
  return products.filter(product => {
    return product.p_type === "Lip";
  })
}

// export const get all skin 
export const getSkin = state => {
  let products = Object.values(state.entities.products);
  return products.filter(product => {
    return product.p_type === "Skin";
  })
}

// get cheek 

export const getCheeks = state => {
  let products = Object.values(state.entities.products);
  return products.filter(product => {
    return product.p_type === "Cheek";
  })
}

// get eye
export const getEyes = state => {
  let products = Object.values(state.entities.products);
  return products.filter(product => {
    return product.p_type === "Eye";
  })
}

// get face 
export const getFace = state => {
  let products = Object.values(state.entities.products);
  return products.filter(product => {
    return product.p_type === "Face";
  })
}


// get hair 
export const getHair = state => {
  let products = Object.values(state.entities.products);
  return products.filter(product => {
    return product.p_type === "Hair";
  })
}


// get fragrance
export const getFragrances = state => {
  let products = Object.values(state.entities.products);
  return products.filter(product => {
    return product.p_type === "Fragrance";
  })
}


// get accessory
export const getAccessories = state => {
  let products = Object.values(state.entities.products);
  return products.filter(product => {
    return product.p_type === "Accessory";
  })
}

export const selectAllProducts = state => (
  Object.values(state.entities.products)
)