import React, { useState, useEffect } from 'react'
import './rooms.css'
import { Link } from 'react-router-dom'
import Room from '../Room/Room'

const Rooms = () => {

  const [ rooms, setRooms ] = useState([])
  const url = "/api/v1/rooms.json"

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setRooms(data.data)
        console.log(data.data)
      })
  }, [rooms.length])

  return(
    <div className="rooms-index-container">
      {rooms.length > 0 &&
      <div>
        {rooms.map((room) => {
          return <Link to={"/rooms/" + room.id} element={<Room />}>
                    <div className="rooms-card" key={room.id}>
                      {room.attributes.name}
                    </div>
                  </Link>

        })}
      </div>
      }

    </div>
  )
}

export default Rooms
