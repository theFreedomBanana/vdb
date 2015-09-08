class Customer < ActiveRecord::Base
	has_many :orders, :dependent => :destroy, inverse_of: :customer
	has_many :articles, through: :orders
	accepts_nested_attributes_for :orders, allow_destroy: true
end