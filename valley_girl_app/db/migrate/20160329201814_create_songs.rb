class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
    	t.string 	:title
    	t.string	:artist
    	t.text		:mp3
    	t.text		:img_url
    end
  end
end
