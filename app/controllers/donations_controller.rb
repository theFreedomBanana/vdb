class DonationsController < ApplicationController

	def new
		render layout: "details"
	end

	def create
		donor = Donor.create(donor_params)
		redirect_to :back
	end

	private

	def donor_params
		params.permit(:email, :company, :gender, :firstname ,:lastname, 
			:address, :additional_address_details, :zipcode, :city, :country, 
			donations_attributes: [:donation_amount, :id, :_destroy])
	end

end