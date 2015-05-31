class Etvous < ActiveRecord::Base
	ActiveAdmin.register Etvous do
		permit_params :title, :white_text, :yellow_text
	end
	ActiveAdmin.register Etvous do
		actions :all, except: [:destroy] 
	end
end