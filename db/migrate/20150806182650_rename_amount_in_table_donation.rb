class RenameAmountInTableDonation < ActiveRecord::Migration
  def change
		rename_column :donations, :amount, :donation_amount
  end
end
