class ChangeCompanyTypeInTableAdherent < ActiveRecord::Migration
  def change
  	change_column :adherents, :company,  :boolean
  end
end
