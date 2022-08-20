class RoomSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  # has_many :users
end
