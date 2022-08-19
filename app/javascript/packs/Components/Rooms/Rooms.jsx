import React, { useState, useEffect } from 'react'

const Rooms = () => {

  const [ rooms, setRooms ] = useState([])
  const url = "/api/v1/rooms.json"

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
  }, [rooms])

  return(
    <div>Rooms PAGE !!!!!!</div>
  )
}

export default Rooms
