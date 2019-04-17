class CreateBrands < ActiveRecord::Migration[5.2]
  def change
    create_table :brands do |t|
      t.string :name, null: false, index: true
      t.integer :category_id, null: false, foreign_key: true
      t.timestamps
    end
  end
end
