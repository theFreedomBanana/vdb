class RenameAmountInTableSubscription < ActiveRecord::Migration
  def change
  			rename_column :subscriptions, :amount, :subscription_amount
  end
end
