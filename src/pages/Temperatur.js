import React, { useState } from 'react';
import { Link } from "react-router-dom";
import FetchData from "../components/FetchData1";
import Bild7 from "../images/Bild7.png";


export default function MyComponent() {
  const [showOtherComponent, setShowOtherComponent] = useState(false);

  function handleClick() {
    setShowOtherComponent(true);
  }

  return (
    <div className="klodioxid">
      <h1> Temperatur</h1>

      <img src={Bild7}
       onClick={handleClick} style={{ display: showOtherComponent ? 'none' : 'block' }} />
      {showOtherComponent && <FetchData />}

      
      <p> Den globala efterfrågan på konsumtionsvaror som jordbruksprodukter, metaller och timmer driver på utvecklingen. Ofta drabbas urfolk och lokalbefolkning av de många negativa effekterna av exploatering av naturresurser. </p>

      
      <div>
      <p> Den globala efterfrågan på konsumtionsvaror som jordbruksprodukter, metaller och timmer driver på utvecklingen. Ofta drabbas urfolk och lokalbefolkning av de många negativa effekterna av exploatering av naturresurser. </p>

      <Link to="/Quizz" className="btn-primary1">
            Gör vårt quizz
          </Link>
         </div>
    </div>
  );
}