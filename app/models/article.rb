class Article < ActiveRecord::Base
	has_and_belongs_to_many :orders, :join_table => "orders_articles"
end