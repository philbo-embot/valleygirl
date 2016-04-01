class SongsController < ApplicationController
	before_action :return_song, only: [:show, :edit, :update, :destroy, :remove_song]
	def index
		@songs = Song.all
	end

	def show
		@songs = Song.find(params[:id])
		@params = params[:id]
		@next_song= @params.to_i + 1
	end

	def new
		@song = Song.new
	end

	def create
		@song = Song.create(song_params)
		redirect_to songs_path
	end

	def edit
		@songs = Song.find(params[:id])
	end

	def update
		# @song = Song.find(params[:id])
		@song.update_attributes(song_params)
		redirect_to songs_path
	end

	def destroy
		# @song = Song.find(params[:id])
		@song.destroy
		redirect_to songs_path
	end

	# PRIVATE METHODS
	private

	def return_song
		@song = Song.find(params[:id])
	end

	def song_params
		params.require(:song).permit(:title, :artist, :mp3, :img_url, :user_comments)
	end

end