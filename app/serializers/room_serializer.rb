class RoomSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  has_many :users
  has_many :messages
end
