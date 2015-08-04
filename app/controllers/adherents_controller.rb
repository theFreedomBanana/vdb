class AdherentsController < ApplicationController
  respond_to :html, :xml, :json

	def new
    @adherent = Adherent.new
    @adherent.subscriptions.build
    # respond_with(@adherent)
    render layout: "details"
  end

  def create
    @adherent = Adherent.new(adherent_params)
    @adherent.save
    s = @adherent.subscriptions.create(subscription_params)
    s.ends_at = s.created_at.next_year
    s.save
  	redirect_to :back
	end

  private

	 def adherent_params
    	params.require(:adherent).permit(:email, :company, :gender, :firstname ,:lastname, 
      :address, :additional_address_details, :zipcode, :city, :country)
    end

    def subscription_params
      params.require(:adherent)[:subscriptions].permit(:amount)
    end

end