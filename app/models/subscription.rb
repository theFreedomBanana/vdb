class Subscription < ActiveRecord::Base
	belongs_to :adherent, inverse_of: :subscriptions
	validates :adherent, presence: true
	validates :subscription_amount, numericality: {only_integer: true}

	def validate_annual_subs()
		if self.subscription_amount < 17
			return false
		else
			return true
		end
	end

	def validate_monthly_subs()
		if self.subscription_amount < 5
			return false
		else
			return true
		end
	end

end