class CreateAdherents < ActiveRecord::Migration
  def change
    create_table :adherents do |t|
      t.string 		:email
      t.string 		:company
      t.string 		:gender
      t.string 		:firstname
      t.string 		:lastname
      t.string 		:address
      t.string 		:additional_address_details
      t.integer 	:zipcode
      t.string 		:city
      t.string 		:country
      t.datetime 	:created_at

      t.timestamps
    end
  end
end
