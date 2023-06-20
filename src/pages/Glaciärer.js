import React, { useState } from 'react';
import { Link } from "react-router-dom";
import FetchData from "../components/FetchData2";
import Bild6 from "../images/Bild6.png";


export default function MyComponent() {
  const [showOtherComponent, setShowOtherComponent] = useState(false);

  function handleClick() {
    setShowOtherComponent(true);
  }

  return (
    <div className="klodioxid">
      <h1> Glaciärer</h1>

      <img src={Bild6}
       onClick={handleClick} style={{ display: showOtherComponent ? 'none' : 'block' }} />
      {showOtherComponent && <FetchData />}

      
      <p> Den globala efterfrågan på konsumtionsvaror som jordbruksprodukter, metaller och timmer driver på utvecklingen. Ofta drabbas urfolk och lokalbefolkning av de många negativa effekterna av exploatering av naturresurser. </p>

      
      <div>
      <p> Den globala efterfrågan på konsumtionsvaror som jordbruksprodukter, metaller och timmer driver på utvecklingen. Ofta drabbas urfolk och lokalbefolkning av de många negativa effekterna av exploatering av naturresurser. </p>

      <Link to="/Quiz" className="btn-primary2">
            Gör vårt quizz
          </Link>
         </div>
    </div>
  );
}