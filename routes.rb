require "pry"
require "pry-nav"
require "sinatra"

get "/" do
	erb :index

end

post "/" do
	erb :commentData
end