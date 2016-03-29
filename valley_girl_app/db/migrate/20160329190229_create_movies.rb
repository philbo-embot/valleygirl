class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
    	t.string	:title
    	t.float		:year
    	t.string	:writer
    	t.string	:actors
    	t.text		:plot
    	t.text		:img_url
    	t.decimal	:rating
    end
  end
end
