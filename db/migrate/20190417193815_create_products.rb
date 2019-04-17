class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false, index: true 
      t.text :color, null: false, array: true, default: []
      t.string :size, null: false
      t.float :price, null: false 
      t.string :type, null: false 
      t.integer :brand_id, null: false, foreign_key: true 
      t.text :what_it_is, null: false 
      t.text :what_it_does, null: false 
      t.text :what_else_you_need_to_know, null: false 
      t.text :how_to_use, null: false, array: true, default: []
      t.text :ingredients, null: false 
      t.integer :category_id, null: false, foreign_key: true 
      t.text :image_url, null: false, array: true, default: []

      t.timestamps
    end
  end
end
