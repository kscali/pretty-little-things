@products.each do |product|
  json.set! product.id do 
    json.extract! product, :id, :name
    json.image_url product.image_url
  end 
end