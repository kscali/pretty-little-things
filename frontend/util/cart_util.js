export const fetchCartItems = () =>
  $.ajax({
    method: "GET",
    url: "/api/cart_items"
  });

export const fetchCartItem = id =>
  $.ajax({
    method: "GET",
    url: `/api/cart_items/${id}`
  });

export const createCartItem = cartItem =>
  $.ajax({
    method: "POST",
    url: "/api/cart_items",
    data: { cart_item: cartItem }
  });

export const updateCartItem = cartItem =>
  $.ajax({
    method: "PATCH",
    url: `/api/cart_items/${cartItem.id}`,
    data: { cart_item: cartItem }
  });

export const deleteCartItem = id =>
  $.ajax({
    method: "DELETE",
    url: `/api/cart_items/${id}`
  });

export const deleteAllCartItems = items =>
  $.ajax({
    method: "DELETE",
    url: "api/cart_items",
    data: { items }
  });
