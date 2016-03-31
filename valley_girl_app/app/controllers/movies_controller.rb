class MoviesController < ApplicationController
# before_action :return_movie, only: [:id, :show, :edit, :update, :destroy, :remove_movie]

	def index
		@movies = Movie.all
	end

	def new
		@movie= Movie.new
	end

	def create
		@movie = Movie.new(movie_params)
		
		if @movie.save
			redirect_to @movie
		else
			render :action => :new
			redirect_to movies_path
		end
	end

	def edit
		@movie = Movie.find(params[:id])
	end

	def update
		@movie = Movie.find(params[:id])
		@movie.update_attributes(neighborhood_params)
		redirect_to movies_path
	end

	
	def show
		@movie = Movie.find(params[:id])
	end

	private
	
	# def return_movie
	# 	@movie = Movie.find(params[:id])
	# end

	def movie_params
		params.require(:movie).permit(:title, :year, :writer, :actors, :plot, :img_url, :rating)

	end
end
