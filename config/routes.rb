Rails.application.routes.draw do
  root 'dashboard#index'

  namespace "api", defaults: { :format => 'json' } do
    namespace "v1" do
      resources :users, only: [:show, :create, :destroy]
      resources :field_workers, only: [:index, :create, :update]
    end
  end
end
