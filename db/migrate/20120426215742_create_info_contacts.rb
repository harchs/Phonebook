class CreateInfoContacts < ActiveRecord::Migration
  def change
    create_table :info_contacts do |t|
      t.integer :number
      t.integer :contact_id

      t.timestamps
    end
  end
end
