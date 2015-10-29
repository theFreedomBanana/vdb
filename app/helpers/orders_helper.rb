module OrdersHelper

	def num_of_art_in_basket
		art = "article"
		total = ""
		if @panier.count > 1
			total = @panier.count.to_s + " " + art.pluralize
		else
			total = @panier.count.to_s + " " + art
		end
		return total.upcase
	end

	def basket_total_price
		total = 0
		@panier.each { |x| total += x[:price].to_i }
		return total
	end

end