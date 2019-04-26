class Api::CartItemsController < ApplicationController
  before_action :require_signed_in!

  def index
    @cart_items = CartItem.where(user_id: current_user.id)
  end

  def create
   
    # @cart_item = CartItem.find_by(user_id: current_user.id, product_id: cart_item_params[:product_id])
    
    @cart_item = current_user.cart_items.find_by(product_id: cart_item_params[:product_id])
    
    if @cart_item.nil?
      @cart_item = current_user.cart_items.create!(cart_item_params)
     else
      new_quantity = @cart_item.quantity + params[:cart_item][:qantity].to_i
      @cart_item.update!(quantity: new_quantity)
    end
   
    @cart_items = [@cart_item]
    render :index
   
  end

  def update 
    @cart_items = CartItem.where(user_id: current_user.id)
    @cart_item = CartItem.find(params[:id])
    
    if @cart_item.update(cart_item_params)
      render :index 
    else
      render json: ["There was an error processing the request"], status: 422
    end 
  end

  def destroy
    @cart_items = CartItem.where(user_id: current_user.id)
    @cart_item = CartItem.find(params[:id])
    @cart_item.destroy
    render :show 
  end

  def destroy_all 
    @cart_items = CartItem.where(user_id: current_user.id)
    @cart_items.destroy_all
    render :index
  end

  private 
  def cart_item_params 
    params.require(:cart_item).permit(:product_id, :quantity)
  end
end
