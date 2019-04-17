class Api::BrandsController < ApplicationController

  def index
    @brands = Brand.all
    render :index 
  end 

  def show
    @brand = Brand.find(params[:id])
    render :show 
  end

end
