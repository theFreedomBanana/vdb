class Adherent < ActiveRecord::Base
	has_many :subscriptions, inverse_of: :adherent
	
	ActiveAdmin.register Adherent do
		permit_params :email, :company, :gender, :firstname, :lastname,
									:address, :additional_address_details, :zipcode,
									:city, :country, :created_at
		actions :all, except: [:destroy] 
	end

	ActiveAdmin.register Subscription do
		permit_params :amount, :ends_at 
		actions :all, except: [:destroy]
	end

end