class DonationsController < ApplicationController

	def new
		render layout: "details"
	end

	def create
		if ( (params[:donation_amount].empty? == false) && (params[:subscription_amount].empty? == false) ) || ( (params[:donation_amount].empty? == true) && (params[:subscription_amount].empty? == true) )
			redirect_to :back
		elsif params[:donation_amount].empty? == false
			donor = Donor.new(user_params)
			donor.donations.new(donation_params)
			donor.save
			redirect_to :back
		elsif params[:subscription_amount].empty? == false
			adherent = Adherent.new(user_params)
			adherent.subscriptions.new(subscription_params)
			adherent.subscriptions.last.monthly = 1
			adherent.save # here we saving to give a created_at value to the subscription
			adherent.subscriptions.last.ends_at = adherent.subscriptions.last.created_at.next_year
			adherent.save
			redirect_to :back
		end
	end

	private

	def user_params
		params.permit(:email, :company, :gender, :firstname ,:lastname, 
			:address, :additional_address_details, :zipcode, :city, :country)
	end

	def donation_params
		params.permit(:donation_amount)
	end

	def subscription_params
		params.permit(:subscription_amount)
	end

end