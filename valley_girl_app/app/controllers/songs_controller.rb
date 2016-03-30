class SongsController < ApplicationController
	before_action :return_song, only: [:show, :edit, :update, :destroy, :remove_song]
	def index
		@test = "this is hello from the songs controller"
		@songs = Song.all

	end

	def create

	end

	def show
		@test = "this is hello from the songs controller"
		@songs = Song.all


	end

	# PRIVATE METHODS
	private

	def return_song
		@song = Song.find(params[:id])
	end

	def song_params
		params.require(:song).permit(:title, :artist, :mp3, :img_url)
	end

end