class ArticlesController < ApplicationController
	after_filter :set_csrf_cookie_for_ng

	def index
		@articles = Article.all
	end

	def affiches_lexpo
		@articles = Article.where(expo: "Vues d'en Bas").where(category: 'affiches originales')
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

	private

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

end