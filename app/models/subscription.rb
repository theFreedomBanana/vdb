class Subscription < ActiveRecord::Base
	belongs_to :adherent, inverse_of: :subscriptions 
end