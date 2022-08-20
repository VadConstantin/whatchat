import React, { useState, useEffect } from 'react'

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
  }, [])

  console.log(rooms);

  return(
    <div>Rooms PAGE !!!!!!</div>
  )
}

export default Rooms
