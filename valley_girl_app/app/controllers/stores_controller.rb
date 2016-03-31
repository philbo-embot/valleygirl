class StoresController < ApplicationController

	before_action :return_store, only: [:show, :edit, :update, :destroy, :remove_store]
	def index
		@stores = Store.all
	end

	def show
		@stores = Store.all
	end

	def new
		@store = Store.new
	end

	def create
		@store = Store.create(store_params)
		redirect_to stores_path
	end

	def edit
		@stores = Store.find(params[:id])
	end

	def update
		@store.update_attributes(store_params)
		redirect_to stores_path
	end

	def destroy
		@store.destroy
		redirect_to stores_path
	end

	# PRIVATE METHODS
	private

	def return_store
		@store = Store.find(params[:id])
	end

	def store_params
		params.require(:store).permit(:name, :location)
	end

end