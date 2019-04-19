class Product < ApplicationRecord
  validates :name, :color, :size, :price, :p_type, :brand_id, presence: true 
  validates :what_it_is, :what_it_does, presence: true 
  validates :what_else_you_need_to_know, :how_to_use, :ingredients, presence: true 
  validates :image_url, presence: true 

  belongs_to :category, foreign_key: :category_id, class_name: :Category 
  belongs_to :brand, foreign_key: :brand_id, class_name: :Brand 
end
