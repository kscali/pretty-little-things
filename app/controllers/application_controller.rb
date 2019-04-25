class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

  helper_method :current_user, :logged_in?, :require_signed_in!

  private 
  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end 

  def login(user)
    @current_user = user 
    session[:session_token] = user.reset_session_token!
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil 
  end

  def require_signed_in!
    unless logged_in? 
      render json: ["Please Sign In"], status: 401
    end
  end
end
