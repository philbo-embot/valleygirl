class MoviesController < ApplicationController
# before_action :return_movie, only: [:id, :show, :edit, :update, :destroy, :remove_movie]

	def index
		@movies = Movie.all
	end

	def show
		@movie = Movie.find(params[:id])
	end

	private
	
	# def return_hero
	# 	@movie = Movie.find(params[:id])
	# end

	def movie_params
		params.require(:movie).permit(:title, :year, :writer, :actors, :plot, :img_url, :rating)

	end
end
