@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :name, :color, :size, :price, :p_type, :brand_id, :what_it_is, :what_it_does, :what_else_you_need_to_know, :how_to_use, :ingredients, :category_id, :image_url, :brand_name
  end

end