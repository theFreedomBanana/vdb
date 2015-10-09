class Adherent < ActiveRecord::Base
	has_many :subscriptions, :dependent => :destroy, inverse_of: :adherent
	accepts_nested_attributes_for :subscriptions, allow_destroy: true
	validates :email, presence: {message: "Veuillez préciser un email"}
	validates :firstname, presence: {message: "Veuillez préciser votre prénom"}
	validates :lastname, presence: {message: "Veuillez préciser votre nom"}
	validates :gender, inclusion: { in: %w(Male Female), message: "Veuillez préciser si vous êtes un homme ou une femme" }
	validates :email, format: {with: /.+@.+\..+/i, message: "Veuillez fournir un email valide" }
	
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