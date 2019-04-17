json.brand do 
  json.extract! @brand, :name, :category_id 
end