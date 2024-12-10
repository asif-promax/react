
// import { useState, useEffect } from 'react'
// function App() {
  
//   const [color, setColor] = useState("blue")
//   const click = color => {
//     setColor(color)
//   }
//   /* This is where we actually
//      change background color */
//   useEffect(() => {
//     document.body.style.backgroundColor = color
//   }, [color])
//   /* Display clickable
//       button */
//   return (<div className = "App">
//     <button onClick = {
//       () => click("yellow")
//     }>Change BG Color</button>
//   </div>)
// }
// export default App;
import React, { useEffect, useState } from 'react';

function App() {
  const [color, setColor] = useState("blue");

  const handleClick = (color) => {
    setColor(color);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div>
      <h1>Change Background Color</h1>
      {/* Pass the handleClick function to the Toggle component */}
      <Toggle handleClick={handleClick} />
    </div>
  );
}

const Toggle = ({ handleClick }) => {
  return (
    <div>
      {/* Add button content */}
      <button 
        onClick={() => handleClick("yellow")}
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
      >
        Change to Yellow
      </button>
    </div>
  );
};

export default App;
