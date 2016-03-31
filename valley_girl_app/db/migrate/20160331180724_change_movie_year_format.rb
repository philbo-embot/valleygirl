class ChangeMovieYearFormat < ActiveRecord::Migration
  def change
    change_column :movies, :year, :integer
  end
end
