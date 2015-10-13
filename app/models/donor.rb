class Donor < ActiveRecord::Base
	has_many :donations, :dependent => :destroy, inverse_of: :donor
	accepts_nested_attributes_for :donations, allow_destroy: true
	validates :email, presence: {message: "Veuillez préciser un email"}
	validates :firstname, presence: {message: "Veuillez préciser votre prénom"}
	validates :lastname, presence: {message: "Veuillez préciser votre nom"}
	validates :gender, inclusion: { in: %w(Male Female), message: "Veuillez préciser si vous êtes un homme ou une femme" }
	validates :email, format: {with: /.+@.+\..+/i, message: "Veuillez fournir un email valide" }

	ActiveAdmin.register Donor do
		permit_params :email, :company, :gender, :firstname, :lastname,
									:address, :additional_address_details, :zipcode,
									:city, :country, :created_at
		actions :all
	end
end