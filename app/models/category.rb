class Category < ApplicationRecord
  validates :name, presence: true

  has_many :products, foreign_key: :category_id, class_name: :Product 
  has_many :brands, foreign_key: :category_id, class_name: :Brand 
end
