class ChangeCompanyTypeInTableAdherent < ActiveRecord::Migration
  def change
  	change_column :adherents, :company, 'boolean USING CAST(company AS boolean)'
  end
end
