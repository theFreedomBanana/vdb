ActiveAdmin.register Adherent do

	sidebar "Adherents Details", only: [:show, :edit] do
    ul do
      li link_to "Subscriptions", admin_adherent_subscriptions_path(adherent)
    end
  end
end

	ActiveAdmin.register Subscription do
  	belongs_to :adherent, :optional => true
    index do
      column :id
      column :adherent_id
      column :subscription_amount
      column :monthly
      column :created_at
      column :ends_at
      actions
    end
  end

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if resource.something?
#   permitted
# end