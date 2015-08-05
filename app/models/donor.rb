class Donor < ActiveRecord::Base
	has_many :donations, inverse_of: :donor

	ActiveAdmin.register Donor do
		permit_params :email, :company, :gender, :firstname, :lastname,
									:address, :additional_address_details, :zipcode,
									:city, :country, :created_at
		actions :all
	end
end