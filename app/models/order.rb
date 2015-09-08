class Order < ActiveRecord::Base
	belongs_to :customer, inverse_of: :orders
	has_and_belongs_to_many :articles, :join_table => "orders_articles"
end
