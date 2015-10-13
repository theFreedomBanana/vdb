class Donation < ActiveRecord::Base
	belongs_to :donor, inverse_of: :donations
	validates :donor, presence: true
	validates :donation_amount, 
	numericality: {only_integer: true, greater_than_or_equal_to: 1, message: "Veuillez indiquer le montant de votre don"}
end