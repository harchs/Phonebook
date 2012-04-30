class InfoContactController < ApplicationController
	respond_to :json
	def show
		respond_with InfoContact.where("contact_id=#{params[:id]}")
	end
	def create
		respond_with InfoContact.create(params[:info_contact])
	end
end