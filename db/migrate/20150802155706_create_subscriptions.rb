class CreateSubscriptions < ActiveRecord::Migration
  def change
    create_table :subscriptions do |t|
      t.integer :amount
      t.datetime :ends_at

      t.timestamps
    end
  end
end
