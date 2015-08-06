class Donation < ActiveRecord::Base
	belongs_to :donor, inverse_of: :donations
end