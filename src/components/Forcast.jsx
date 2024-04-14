import React from "react";

export default function Forcast({data}) {
  return (
    <div className="card max-w-96 bg-base-100 shadow-xl p-4 gap-5 ">
      <h1 className="text-2xl italic hover:not-italic font-mono mb-8">
        Weather Forcast
      </h1>
      <div className="collapse collapse-arrow bg-base-200 w-80">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          {data.date0}
        </div>
        <div className="collapse-content">
          <p>Temp: {data.temp0}&deg;</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        {data.date1}
        </div>
        <div className="collapse-content">
          <p>Temp: {data.temp1}&deg;</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        {data.date2}
        </div>
        <div className="collapse-content">
          <p>Temp: {data.temp2}&deg;</p>
        </div>
      </div>
    </div>
  );
}
