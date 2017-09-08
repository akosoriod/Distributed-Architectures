Rails.application.routes.draw do
  post '/buy', to: 'buy#sale'
end
