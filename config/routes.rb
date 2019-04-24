Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :brands, only: [:index, :show]
    resources :categories, only: [:index, :show]
    resources :products, only: [:index, :show]
    resources :cart_items, only: [:index, :create, :update, :destroy]
  end
end
