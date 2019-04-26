export const fetchCartItems = () => (
  $.ajax({
    method: "GET",
    url: "/api/cart_items"
  })
);

export const fetchCartItem = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/cart_items/${id}`
  })
);
                              
export const createCartItem = (cart_item) => (
  $.ajax({
    method: "POST",
    url: '/api/cart_items',
    data: { cart_item }
  })
);

export const updateCartItem = (item) => (
  $.ajax({
    method: "PATCH",
    url: `/api/cart_items/${item.id}`,
    data: { item }
  })
);

export const deleteCartItem = (id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/cart_items/${id}`
  })
);

export const deleteAllCartItems = (items) => (
  $.ajax({
    method: 'DELETE',
    url: 'api/cart_items',
    data: { items }
  })
);