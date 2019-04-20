@categories.each do |category|
  json.set! category.id do
    json.extract! category, :name 
  end
end