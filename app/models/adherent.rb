class Adherent < ActiveRecord::Base
	ActiveAdmin.register Etvous do
		permit_params :email, :company, :gender, :firstname, :lastname,
									:address, :additional_address_details, :zipcode,
									:city, :country, :created_at
		actions :all, except: [:destroy] 
	end
end