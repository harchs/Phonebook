class InfoContactController < ApplicationController
	respond_to :json
	def show
		respond_with InfoContact.find(params[:id])
	end
end