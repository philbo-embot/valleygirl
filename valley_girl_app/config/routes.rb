Rails.application.routes.draw do
	 
  	resources   :stores
  	resources   :songs
  	resources   :movies
  	root 'landings#index' 

end

#     Prefix Verb   URI Pattern                Controller#Action
#     stores GET    /stores(.:format)          stores#index
#            POST   /stores(.:format)          stores#create
#  new_store GET    /stores/new(.:format)      stores#new
# edit_store GET    /stores/:id/edit(.:format) stores#edit
#      store GET    /stores/:id(.:format)      stores#show
#            PATCH  /stores/:id(.:format)      stores#update
#            PUT    /stores/:id(.:format)      stores#update
#            DELETE /stores/:id(.:format)      stores#destroy
#      songs GET    /songs(.:format)           songs#index
#            POST   /songs(.:format)           songs#create
#   new_song GET    /songs/new(.:format)       songs#new
#  edit_song GET    /songs/:id/edit(.:format)  songs#edit
#       song GET    /songs/:id(.:format)       songs#show
#            PATCH  /songs/:id(.:format)       songs#update
#            PUT    /songs/:id(.:format)       songs#update
#            DELETE /songs/:id(.:format)       songs#destroy
#     movies GET    /movies(.:format)          movies#index
#            POST   /movies(.:format)          movies#create
#  new_movie GET    /movies/new(.:format)      movies#new
# edit_movie GET    /movies/:id/edit(.:format) movies#edit
#      movie GET    /movies/:id(.:format)      movies#show
#            PATCH  /movies/:id(.:format)      movies#update
#            PUT    /movies/:id(.:format)      movies#update
#            DELETE /movies/:id(.:format)      movies#destroy

