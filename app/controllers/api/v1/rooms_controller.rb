module Api
  module V1
    class RoomsController < ApplicationController

      protect_from_forgery with: :null_session

      def index
        rooms = Room.all
        render json: RoomSerializer.new(rooms, options).serialized_json
      end

      def show
        room = Room.find(params[:id])
        render json: RoomSerializer.new(room, options).serialized_json
      end

      private

      def options
        @options ||= { include: %i[messages users] }
      end

    end
  end
end
