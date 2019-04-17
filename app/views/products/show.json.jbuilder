json.products do 
  json.extract! @product, :name, :color, :size, :price, :type, :brand_id, :what_it_is, :what_it_does, :what_else_you_need_to_know, :how_to_use, :ingredients, :category_id
  json.image_url @product.image_url
end