Rails.application.routes.draw do
  devise_for :users

  root to: "pages#index"

  namespace :api do
    namespace :v1 do
      resources :rooms
      resources :messages
    end
  end

  get '*path', to: 'pages#index', via: :all

end
