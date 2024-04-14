import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate=useNavigate()
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Weather App</h1>
      <p className="py-6">Introducing our weather app, your one-stop destination for comprehensive weather information! Our app provides users with real-time updates on current weather conditions, detailed forecasts for the next three days, and invaluable insights into the astronomical conditions of any city.</p>
      <button onClick={()=>{
        navigate("/dasboard")
      }} className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}
