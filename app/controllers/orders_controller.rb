class OrdersController < ApplicationController
	# before_action :set_order, only: [:new]
	respond_to :html, :xml, :json
	protect_from_forgery with: :exception

	def new
	end


	private
	def set_order
		# @order = Order.new
		# order_params.each do |key, value|
		# 	@order.articles.push(Article.find_by_name(value))
		# end
	end

	def order_params
		params_allowed = []
		params.each do |key, value|
			if key.include?"article"
				params_allowed.push(key)
			end
		end
		params.permit(params_allowed)
	end

end