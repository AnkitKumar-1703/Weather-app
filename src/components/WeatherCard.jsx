import React from "react";

export default function WeatherCard({data}) {
  return (
    <div className="card max-w-96 bg-base-100 shadow-xl px-10 gap-2 justify-center items-center">
      <h1 className="text-2xl italic hover:not-italic font-mono ">Current Weather</h1>
      <div>
        <h1 className="text-4xl font-bold">{data.town}</h1>
        <h1 className="text-xl font-semibold">{data.state}, {data.country}</h1>
      </div>
      
      <div className="badge badge-primary badge-outline">{data.date}</div>
      <div className="flex justify-evenly ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
        <div>{data.desc}</div>
      </div>
      <div className="text-8xl">{data.temp}&deg;</div>
      <div className="flex justify-around w-full gap-3">
        <div className="flex flex-col items-center justify-center bg-base-200 rounded-lg p-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" id="wind"><g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g stroke="#000" stroke-width="2" transform="translate(-1387 -2191)"><g transform="translate(1388 2192)"><path d="M7.59.59A2 2 0 1 1 9 4H0m10.59 11.41A2 2 0 1 0 12 12H0m15.73-8.27A2.5 2.5 0 1 1 17.5 8H0"></path></g></g></g></svg>    
            <div className="text-lg font-semibold ">{data.wind} km/h</div>
            Wind
        </div>
        <div className="flex flex-col items-center justify-center bg-base-200 rounded-lg p-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="">
  <path fill="none" d="M0 0h24v24H0z"/>
  <path d="M12 2c3.9 0 7 3.1 7 7 0 1.8-.7 3.4-1.8 4.6l-1.3 1.4-.7.7-.7-.7-1.3-1.4C10.7 12.4 10 10.8 10 9c0-3.9 3.1-7 7-7zm-2 14h4v-2H10v2zm0-4h4V6H10v6zm2-9c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z"/>
</svg>
  
            <div className="text-lg font-semibold ">{data.humidity}% </div>
            Humidity
        </div>
        <div className="flex flex-col items-center justify-center bg-base-200 rounded-lg p-4">
        <svg class="w-6 h-6 text-gray-800 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
        </svg>
            <div className="text-lg font-semibold ">{data.humidity} Km </div>
            Visibility
        </div>
        
        
      </div>
    </div>
  );
}
