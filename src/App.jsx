import React, { useMemo, useState } from 'react'

export default function App() {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(65);
  const output = useMemo(() => {
    const calcHeight = Math.pow((height/100), 2);
    return(weight / calcHeight).toFixed(1)
  },[weight, height])
  return (
    <div className='flex flex-col text-center items-center justify-center min-h-screen font-serif w-[90vw] max-w-lg mx-auto'>
      <h1 className='text-2xl md:text-6xl text-center mx-5 bg-[#B85042] py-5 px-16 text-white font-bold w-full rounded-t-lg'>BMI Calculator</h1>
      <div className='bg-[#A7BEAE] p-5 w-full rounded-b-lg'>
        <div id='input-section' className='flex flex-col items-center justify-center pb-3 w-3/4 mx-auto'>
          <p id='slider-output'>Weight: {weight} kg</p>
          <input type="range" id='input-slider' className='w-full mt-2' step={1} min={40} max={200} onChange={(e) => setWeight(e.target.value)}/>
          <p id='slider-output'>Height: {height} cm</p>
          <input type="range" id='input-slider' className='w-full mt-2' min={140} max={300} onChange={(e) => setHeight(e.target.value)}/>
        </div>
        <div id='output-section' className='flex flex-col items-center justify-center gap-1'>
          <p className='font-semibold'>Your BMI is</p>
          <button className='text-white bg-[#B85042] hover:bg-[#a83324] font-bold font-sans rounded-lg text-sm px-5 py-2 m-1' disabled>{output}</button>
        </div>
      </div>
    </div>
  )
}
