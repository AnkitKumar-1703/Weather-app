import React from 'react'

export default function Astronomy({data}) {
  return (
    <div className="card max-w-96 bg-base-100 shadow-xl py-4 gap-2 ">
      <h1 className="text-2xl italic hover:not-italic font-mono mb-8">Astronomy</h1>
      <div className='flex flex-wrap gap-4 justify-center'>
        <div className='px-2 py-4 bg-base-200 rounded-xl flex flex-col items-center gap-2 w-36'>
            <div className=''>Moon_illumination</div>
            <div className='font-bold'>{data.moon_illumination}</div>
        </div>
        <div className='px-2 py-4 bg-base-200 rounded-xl flex flex-col items-center gap-2 w-36'>
            <div className=''>Moon_phase</div>
            <div className='font-bold'>{data.moon_phase}</div>
        </div>
        <div className='px-2 py-4 bg-base-200 rounded-xl flex flex-col items-center gap-2 w-36'>
            <div className=''>Moonrise</div>
            <div className='font-bold'>{data.moonrise}</div>
        </div>
        <div className='px-2 py-4 bg-base-200 rounded-xl flex flex-col items-center gap-2 w-36'>
            <div className=''>Moonset</div>
            <div className='font-bold'>{data.moonset}</div>
        </div>
        <div className='px-2 py-4 bg-base-200 rounded-xl flex flex-col items-center gap-2 w-36'>
            <div className=''>Sunrise</div>
            <div className='font-bold'>{data.sunrise}</div>
        </div>
        <div className='px-2 py-4 bg-base-200 rounded-xl flex flex-col items-center gap-2 w-36'>
            <div className=''>Sunset</div>
            <div className='font-bold'>{data.sunset}</div>
        </div>
        
        

      </div>
      
      
      
      
    </div>
  )
}
