import React, { useState ,useEffect} from "react";
import Forcast from "./Forcast";
import SearchBox from "./SearchBox";
import WeatherCard from "./WeatherCard";
import Astronomy from "./Astronomy";
import axios from "axios"
import Searchbutton from "./Searchbutton";
import Loder from "./Loder";
export default function Dashboard() {
    const [city,setCity]=useState("delhi");
    const [currentWeather,setCurrentWeather]=useState({});
    const [astronomy,setAstronomy]=useState({});
    const [forcast,setForcast]=useState({});
    const [loder, setLoder] = useState(null);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(`https://wttr.in/${city}?format=j1`);
    //             setData(response.data);
    //             // console.log(data);
    //             const currentobj={
    //                 town:data.nearest_area[0].areaName[0].value,
    //                 state:data.nearest_area[0].region[0].value,
    //                 country:data.nearest_area[0].country[0].value,
    //                 date:data.current_condition[0].localObsDateTime,
    //                 temp:data.current_condition[0].temp_C,
    //                 desc:data.current_condition[0].weatherDesc[0].value,
    //                 wind:data.current_condition[0].windspeedKmph,
    //                 humidity:data.current_condition[0].humidity,
    //                 visibility:data.current_condition[0].visibility
    //             }
    //             setCurrentWeather(currentobj);
    //             console.log(currentobj);
    //           } catch (error) {
    //             alert('An error occurred while fetching data. Please try again later.');
    //           }
    //     };
    
    //     fetchData();
    //   }, [city]);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center flex-col gap-10">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">Welcome to Dashboard</h1>
        </div>
        <div className="flex">
        <SearchBox onchange={(e)=>{
            setCity(e.target.value);
            // console.log(city);
        }} />
        <Searchbutton onclick={async()=>{
            setLoder(true);
            try {
                const response = await axios.get(`https://wttr.in/${city}?format=j1`);
                // console.log(data);
                const currentobj={
                    town:response.data.nearest_area[0].areaName[0].value,
                    state:response.data.nearest_area[0].region[0].value,
                    country:response.data.nearest_area[0].country[0].value,
                    date:response.data.current_condition[0].localObsDateTime,
                    temp:response.data.current_condition[0].temp_C,
                    desc:response.data.current_condition[0].weatherDesc[0].value,
                    wind:response.data.current_condition[0].windspeedKmph,
                    humidity:response.data.current_condition[0].humidity,
                    visibility:response.data.current_condition[0].visibility
                }
                const forcastobj={
                    temp0:response.data.weather[0].avgtempC,
                    date0:response.data.weather[0].date,
                    temp1:response.data.weather[1].avgtempC,
                    date1:response.data.weather[1].date,
                    temp2:response.data.weather[2].avgtempC,
                    date2:response.data.weather[2].date
                }
                if(response.status==200){
                    setLoder(false);
                }
                setCurrentWeather(currentobj);
                setForcast(forcastobj)
                setAstronomy(response.data.weather[0].astronomy[0])
                // console.log(astronmyobj);
                // console.log(response.data.nearest_area[0].areaName[0].value);
              } catch (error) {
                alert('An error occurred while fetching data. Please try again later.');
                setLoder(false)
              }
        }}/>
        </div>
        
        {/* {loder==null && <div></div>}
        {loder==true && <Loder/>}
        {loder==false &&  <div className="flex gap-10 flex-wrap">
        <WeatherCard data={currentWeather} />
        <Forcast data={forcast}/>
        <Astronomy data={astronomy}/>
      </div>} */}
      

      {loder == null? <div></div>: loder? <Loder />: (
      <div className="flex gap-10 flex-wrap">
        <WeatherCard data={currentWeather} />
        <Forcast data={forcast} />
        <Astronomy data={astronomy} />
      </div>
    )
}
        
       
      </div>
      
    </div>
  );
}
