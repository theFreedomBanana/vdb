class AddMonthlyToSubscription < ActiveRecord::Migration
  def change
		add_column :subscriptions, :monthly, :boolean
end
end
