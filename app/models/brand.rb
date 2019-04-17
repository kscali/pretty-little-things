class Brand < ApplicationRecord
  validates :name, :category_id, presence: true 

  belongs_to :Category 
  has_many :products 
end
