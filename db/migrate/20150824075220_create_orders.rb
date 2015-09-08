class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer 	:amount
      t.integer 	:customer_id
      t.datetime	:created_at

      t.timestamps
    end
  end
end
