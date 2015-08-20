class AddExpoToArticle < ActiveRecord::Migration
  def change
  	add_column :articles, :expo, :string
  end
end
