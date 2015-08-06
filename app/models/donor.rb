class Donor < ActiveRecord::Base
	has_many :donations, :dependent => :destroy, inverse_of: :donor
	accepts_nested_attributes_for :donations, allow_destroy: true

	ActiveAdmin.register Donor do
		permit_params :email, :company, :gender, :firstname, :lastname,
									:address, :additional_address_details, :zipcode,
									:city, :country, :created_at
		actions :all
	end
end