class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
    	t.string	:name
    	t.integer	:price
    	t.boolean	:sold
    	t.string	:category

      t.timestamps
    end
  end
end
