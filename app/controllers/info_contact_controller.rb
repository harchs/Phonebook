class InfoContactController < ApplicationController
	respond_to :json
	def show
		respond_with InfoContact.find_by_contact_id(params[:id])
	end
end