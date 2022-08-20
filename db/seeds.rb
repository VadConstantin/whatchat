Room.create({name: "Video games"})
User.create(email: "a@a.com", password: "asdasd", password_confirmation: "asdasd")
Message.create({content: "hello, first message", user_id: 1, room_id: 1})
Message.create({content: "hello c'est amandine, ça va ?", user_id: 2, room_id: 1})
