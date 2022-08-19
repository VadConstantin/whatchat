import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Rooms from './Rooms/Rooms'
import './app.css'

const App = () => {
  return(
    <div className="main-container">
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/rooms" element={< Rooms/>} />
      </Routes>
    </div>
  )
}

export default App
