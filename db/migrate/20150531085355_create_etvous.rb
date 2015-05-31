class CreateEtvous < ActiveRecord::Migration
  def change
    create_table :etvous do |t|
      t.string :title
      t.string :white_text
      t.string :yellow_text

      t.timestamps
    end
  end
end
