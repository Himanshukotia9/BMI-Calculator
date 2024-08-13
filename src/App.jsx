import React, { useState } from 'react'

export default function App() {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(65);
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[#E7E8D1]'>
      <h1 className='text-2xl md:text-6xl text-center mx-5 bg-[#B85042] py-5 px-16 text-white font-bold'>BMI Calculator</h1>
      <div className='bg-[#A7BEAE]'>
        <div id='input-section' className='flex flex-col items-center justify-center'>
          <p id='slider-output'>Weight: {weight} kg</p>
          <input type="range" id='input-slider' step={1} min={40} max={200} onChange={(e) => setWeight(e.target.value)}/>
          <p id='slider-output'>Height: {height} cm</p>
          <input type="range" id='input-slider' onChange={(e) => setHeight(e.target.value)}/>
        </div>
        <div id='output-section' className='flex flex-col items-center justify-center'>
          <p>Your BMI is</p>
          <button className='text-white bg-[#B85042] border border-gray-300 hover:bg-[#a83324] font-medium rounded-lg text-sm px-5 py-2 m-1' disabled>25</button>
        </div>
      </div>
    </div>
  )
}
