export const fetchBrands = () => (
  $.ajax({
    method: "GET",
    url: "/api/brands"
  })
)

export const fetchBrand = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/brands/${id}`
  })
)