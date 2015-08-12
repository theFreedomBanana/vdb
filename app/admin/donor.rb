ActiveAdmin.register Donor do

sidebar "Donors Details", only: [:show, :edit] do
    ul do
      li link_to "Donations", admin_donor_donations_path(donor)
    end
  end
end

	ActiveAdmin.register Donation do
  	belongs_to :donor, :optional => true
    index do
      column :id
      column :donor_id
      column :donation_amount
      column :created_at
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