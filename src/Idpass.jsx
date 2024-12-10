import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Idpass = () => {
  const [data, setData] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const datas = await axios.get(
          `https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`
        );
        setData(datas.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchdata();
  }, [id]);
  console.log(data)
  if (!data) {
    return (
      <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="max-w-2xl mx-auto bg-gray-700 p-6 rounded-lg shadow-md">
        <img
          src={data.Poster}
          alt={data.Title}
          className=" h-96 w-screen rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{data.Title}</h1>
        <p className="text-gray-300 mb-2">
          <strong>Year:</strong> {data.Year}
        </p>
        <p className="text-gray-300 mb-2">
          <strong>Genre:</strong> {data.Genre}
        </p>
        <p className="text-gray-300 mb-2">
          <strong>Director:</strong> {data.Director}
        </p>
        <p className="text-gray-300 mb-2">
          <strong>Plot:</strong> {data.Plot}
        </p>
        <p className="text-gray-300 mb-2">
          <strong>IMDB Rating:</strong> {data.imdbRating}
        </p>
      </div>
    </div>
  );
};

export default Idpass;
