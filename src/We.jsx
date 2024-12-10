import axios from "axios";
import { useState } from "react";

const Weather = () => {
  const [data, setData] = useState(null); 
  const [data1, setSearchData] = useState('');

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${data1}&units=imperial&appid=0cf3d05c6cb443424f42856d18e090b3`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-blue-800 text-white">
      <div className="bg-white rounded shadow-lg p-6 w-11/12 max-w-md text-gray-900">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Weather App</h1>
        <div className="flex items-center space-x-2 mb-4">
          <input type="text" placeholder="Enter city name" value={data1} onChange={(e) => setSearchData(e.target.value)} className="flex-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"/>
          <button onClick={fetchdata} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
            Search
          </button>
        </div>
        {data && (
          <div className="bg-blue-100 rounded p-4 mt-4 text-center">
            <h2 className="text-xl font-bold text-blue-700">Weather in {data.name}</h2>
            <p className="text-lg">Humidity: {data.main.humidity}%</p>
            <p className="text-lg">Temperature: {data.main.temp}°F</p>
            <p className="text-lg capitalize">Conditions: {data.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
