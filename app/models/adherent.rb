class Adherent < ActiveRecord::Base
	has_many :subscriptions, :dependent => :destroy, inverse_of: :adherent
	accepts_nested_attributes_for :subscriptions, allow_destroy: true
	
	ActiveAdmin.register Adherent do
		permit_params :email, :company, :gender, :firstname, :lastname,
									:address, :additional_address_details, :zipcode,
									:city, :country, :created_at
		actions :all
	end

	ActiveAdmin.register Subscription do
		permit_params :amount, :ends_at 
		actions :all
	end

end