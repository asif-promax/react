import React, { useState } from 'react'

const Cal = () => {
        const [input, setInput] = useState("");
      
        const handleClick = (value) => {
          setInput((prev) => prev + value);
        };
      
        const clearInput = () => {
          setInput("");
        };
      
        const calculateResult = () => {
          try {
            setInput(eval(input).toString());
          } catch (error) {
            setInput("Error");
          }
        };
      
  return (
    <div className="text-center mt-12">
    <h1 className="text-2xl font-bold mb-4">Simple Calculator</h1>
    <div>
      <input
        type="text"
        value={input}
        readOnly
        className="w-52 text-lg text-right border border-gray-400 rounded mb-4 p-2"
      />
    </div>
    <div className="flex flex-wrap justify-center">
      {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."].map((num) => (
        <button
          key={num}
          onClick={() => handleClick(num)}
          className="w-12 h-12 text-lg m-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          {num}
        </button>
      ))}
      <button
        onClick={clearInput}
        className="w-12 h-12 text-lg m-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        C
      </button>
    </div>
    <div className="flex justify-center mt-2">
      {["+", "-", "*", "/"].map((operator) => (
        <button
          key={operator}
          onClick={() => handleClick(operator)}
          className="w-12 h-12 text-lg m-1 bg-blue-200 rounded hover:bg-blue-300"
        >
          {operator}
        </button>
      ))}
      <button
        onClick={calculateResult}
        className="w-12 h-12 text-lg m-1 bg-green-500 text-white rounded hover:bg-green-600"
      >
        =
      </button>
    </div>
  </div>
);
}
  
export default Cal
