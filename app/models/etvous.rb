class Etvous < ActiveRecord::Base
	ActiveAdmin.register Etvous do
		permit_params :title, :white_text, :yellow_text
		actions :all, except: [:destroy] 
	end
end