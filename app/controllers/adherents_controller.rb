class AdherentsController < ApplicationController
  include AdhesionsHelper
  respond_to :html, :xml, :json
  layout "details"


  def new
    @adherent = Adherent.new
    @adherent.subscriptions.build
    respond_with(@adherent)
  end

  def create
    amount = 0
    params["adherent"]["subscriptions_attributes"]["0"]["subscription_checkbox"] == "1" ? amount = 17 : amount = params["adherent"]["subscriptions_attributes"]["0"]["subscription_amount"].to_i
    cents_amount = amount*100
    test = adherent_params
    @adherent = Adherent.new(adherent_params)
    if !@adherent.subscriptions.last.validate_annual_subs
      @adherent.valid?
      @adherent.errors.messages.store(:subscription_amount, ["Le montant minimum de l'adhésion est de 17€"])
      render "new"
      # Le mieux serait de pouvoir insérer le message ci dessus au début du hash
      # de sorte qu'il apparaisse en 1er dans les erreurs
    elsif @adherent.valid?
      @adherent.subscriptions.last.save
      @adherent.subscriptions.last.ends_at = @adherent.subscriptions.last.created_at.next_year
      @adherent.save
      stripe_charge(cents_amount, @adherent.id)
      redirect_to root_path
    else
      render "new"
    end
	end
  
  private

    def adherent_params
    	params.require(:adherent).permit(:email, :company, :gender, :firstname ,:lastname, 
      :address, :additional_address_details, :zipcode, :city, :country, 
      subscriptions_attributes: [:subscription_amount, :id, :_destroy])
    end

end