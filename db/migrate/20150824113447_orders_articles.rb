class OrdersArticles < ActiveRecord::Migration
	def change
		create_table :orders_articles, id: false do |t|
			t.belongs_to	:order, index: true
			t.belongs_to	:article, index: true
			t.timestamps
		end
	end
end