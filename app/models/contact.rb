class Contact < ActiveRecord::Base
	has_many :info_contacts
	accepts_nested_attributes_for :info_contacts
end
