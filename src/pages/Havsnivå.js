import React, { useState } from 'react';
import { Link } from "react-router-dom";
import FetchData from "../components/FetchData3";
import Bild8 from "../images/Bild8.jpeg";


export default function MyComponent() {
  const [showOtherComponent, setShowOtherComponent] = useState(false);

  function handleClick() {
    setShowOtherComponent(true);
  }

  return (
    <div className="kolioxid">
      <h1> Havsnivå</h1>

      <img src={Bild8}
       onClick={handleClick} style={{ display: showOtherComponent ? 'none' : 'block' }} />
      {showOtherComponent && <FetchData />}

      
      <p> Den globala efterfrågan på konsumtionsvaror som jordbruksprodukter, metaller och timmer driver på utvecklingen. Ofta drabbas urfolk och lokalbefolkning av de många negativa effekterna av exploatering av naturresurser. </p>

      
      <div>
      <p> Den globala efterfrågan på konsumtionsvaror som jordbruksprodukter, metaller och timmer driver på utvecklingen. Ofta drabbas urfolk och lokalbefolkning av de många negativa effekterna av exploatering av naturresurser. </p>

      <Link to="/Quiz" className="btn-primary3">
            Gör vårt quizz
          </Link>
         </div>
    </div>
  );
}