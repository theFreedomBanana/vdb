class AddAdherentRefsToSubscription < ActiveRecord::Migration
  def change
    add_column :subscriptions, :adherent_id, :integer
  end
end
