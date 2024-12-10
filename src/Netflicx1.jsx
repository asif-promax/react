import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Netflix = () => {
  const [data, setData] = useState([]);
  const [sdata, setsData] = useState("");

  const fetchdata = async () => {
    try{
    const datas = await axios.get(
      `https://www.omdbapi.com/?s=${sdata}&apikey=a5ef1268`
    );
    setData(datas.data.Search);
   
  }catch(error){
    console.error("error")
  }
  };
  console.log(data)
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="flex flex-col items-center pt-10 space-y-4">
        <input type="text" value={sdata} onChange={(e) => setsData(e.target.value)} placeholder="Search Movies or Series"
          className="bg-gray-700 h-12 w-3/4 md:w-1/2 px-4 text-gray-50 rounded-t-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <button
          className="bg-blue-600 h-10 w-3/4 md:w-1/2 text-white font-semibold hover:bg-blue-700 transition rounded-b-lg focus:ring-2 focus:ring-blue-500"
          onClick={fetchdata}>
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {data && data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={item.Poster}
              alt={item.Title}
              className="w-full h-72 object-cover rounded-md mb-4"
            />
          <Link to={`/Idpass/${item.imdbID}`}>  <h3 className="text-lg font-bold mb-2">{item.Title}</h3></Link> 
            <h4 className="text-sm text-gray-300">{item.Type}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Netflix;
