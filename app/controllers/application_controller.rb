class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
  	@blackblock1 = Etvous.find(1)
  	@blackblock2 = Etvous.find(2)
  	@blackblock3 = Etvous.find(3)
  end

end