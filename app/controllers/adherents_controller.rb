class AdherentsController < ApplicationController
  respond_to :html, :xml, :json

	def new
    @adherent = Adherent.new
    @adherent.subscriptions.build
    # respond_with(@adherent)
    render layout: "details"
  end

  def create
    @adherent = Adherent.create(adherent_params)
    @adherent.subscriptions.last.ends_at = @adherent.subscriptions.last.created_at.next_year
    @adherent.save
  	redirect_to :back
	end

  private

	 def adherent_params
    	params.require(:adherent).permit(:email, :company, :gender, :firstname ,:lastname, 
      :address, :additional_address_details, :zipcode, :city, :country, 
      subscriptions_attributes: [:amount, :id, :_destroy])
    end

end