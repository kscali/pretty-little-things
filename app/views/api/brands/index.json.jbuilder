@brands.each do |brand|
  json.set! brand.id do 
    json.extract! brand, :id ,:name, :category_id
  end
end