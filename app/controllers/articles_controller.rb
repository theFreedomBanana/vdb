class ArticlesController < ApplicationController

	def index
		@articles = Article.all
	end

	def affiches_lexpo
		@articles = Article.where(expo: "Vues d'en Bas").where(category: 'affiches')
	end

	def photos_lexpo
		@articles = Article.where(expo: "Vues d'en Bas").where(category: 'photos')
	end

	def posters_lexpo
		@articles = Article.where(expo: "Vues d'en Bas").where(category: 'posters')
	end

	def photos_deuxcent
		@articles = Article.where(expo: "200 for 141 500")
	end

end