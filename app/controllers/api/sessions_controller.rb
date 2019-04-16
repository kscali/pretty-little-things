class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password])

    if @user && @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid email/password"]
    end

  end

  def destroy
    @user = current_user

    if @user 
      logout 
      render "api/users/show"
    else 
      render 'Not logged in', status: 404
    end

  end

end
