class DonationsController < ApplicationController
	layout "details"

	def new
	end

	def create #validation seem to work but when resending new page on incorrect submit values form inputs don't remember values
		if ( !(params[:donation_amount].empty?) && !(params[:subscription_amount].empty?) ) || ( (params[:donation_amount].empty?) && (params[:subscription_amount].empty?) )
			@user = Donor.new(user_params)
			@user.valid?
			flash[:alert] = {:msg => ["Vous devez choisir parmis une donation simple ou mensuelle"]}
			@user.errors.messages.each do |x, y|
				flash[:alert].store(x, y)
			end
			render "new"
		elsif !(params[:donation_amount].empty?)
			@donor = Donor.new(user_params)
			@donor.donations.new(donation_params)
			if @donor.valid?
				@donor.save
				redirect_to new_donation_path
			else
				flash[:alert] = @donor.errors.messages
				render "new"
			end
		elsif !(params[:subscription_amount].empty?)
			@adherent = Adherent.new(user_params)
			@adherent.subscriptions.new(subscription_params)
			if !@adherent.subscriptions.last.validate_monthly_subs()
				@adherent.valid?
				flash[:alert]= {:subscription_amount => ["Le montant minimum de la donation mensuelle est de 5€"]}
				flash[:alert].merge!(@adherent.errors.messages)
				render "new"
			elsif @adherent.valid?
				@adherent.subscriptions.last.save # here we saving to give a created_at value to the subscription
				@adherent.subscriptions.last.ends_at = @adherent.subscriptions.last.created_at.next_year
				@adherent.subscriptions.last.monthly = 1
				@adherent.save
				redirect_to new_donation_path
			else
				flash[:alert] = @adherent.errors.messages
				render "new"
			end
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