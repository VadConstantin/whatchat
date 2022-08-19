Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: "pages#home"
  get '*path', to: 'pages#index', via: :all

  namespace :api do
    namespace :v1 do
      resources :rooms
      resources :messages
    end
  end

end
