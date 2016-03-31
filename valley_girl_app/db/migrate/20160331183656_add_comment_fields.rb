class AddCommentFields < ActiveRecord::Migration
  def change
  	add_column :movies, :user_comments, :text
  	add_column :songs, :user_comments, :text
  	add_column :stores, :user_comments, :text
  end
end
