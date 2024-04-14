import React from "react";

export default function SearchBox({onchange}) {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <input onChange={onchange} type="text" className="grow" placeholder="Enter city here" />
      
    </label>
  );
}
