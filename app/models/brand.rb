class Brand < ApplicationRecord
  validates :name, :category_id, presence: true 

  belongs_to :Category, foreign_key: :category_id, class_name: :Category 
  has_many :products, foreign_key: :brand_id, class_name: :Product  
end
