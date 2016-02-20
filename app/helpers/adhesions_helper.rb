module AdhesionsHelper

	def stripe_charge(cents_amount, clients_id)
		# Get the credit card details submitted by the form
  		token = params[:stripeToken]
  		# Create the charge on Stripe's servers - this will charge the user's card
  		begin
	    	charge = Stripe::Charge.create(
	    	  :amount => cents_amount, # amount in cents, again
		      :currency => "eur",
		      :source => token,
		      :description => "Adhésion du client n° " + clients_id.to_s
		    )
    	rescue Stripe::CardError => e
		# The card has been declined
		end
	end

end