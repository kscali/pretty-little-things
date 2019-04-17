class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name, null: false, index: true
      t.string :last_name, null: false, index: true 
      t.string :email, null: false, index: true, unique: true  
      t.string :password_digest, null: false 
      t.string :session_token, null: false 
      t.timestamps
    end
  end
end
