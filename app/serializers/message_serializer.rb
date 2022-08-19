class MessageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :user_id, :room_id
end
