import React, { useState } from 'react';
import { Link } from "react-router-dom";
import FetchData from "../components/FetchData";
import Bild5 from "../images/Bild5.png";


export default function MyComponent() {  // Definierar och exporterar en funktion som kallar på komponenten MyComponent
  const [showOtherComponent, setShowOtherComponent] = useState(false);  // Använder hooken useState för att hålla koll på tillståndet showOtherComponent, som börjar som false

  function handleClick() {  // Definierar en funktion som hanterar en klick-händelse
    setShowOtherComponent(true);  // När funktionen körs, ändrar den showOtherComponent till true
  }

  return (
    // När bilden klickas på, körs funktionen handleClick. Styles-attributet gör att bilden döljs om showOtherComponent är true.
    // Om showOtherComponent är true, visas också FetchData-komponenten
    <div className="klodioxid">
      <h1> Koldioxid</h1>

      <img src={Bild5}
       onClick={handleClick} style={{ display: showOtherComponent ? 'none' : 'block' }} />  
       {showOtherComponent && <FetchData />}  

      
      <p> Den globala efterfrågan på konsumtionsvaror som jordbruksprodukter, metaller och timmer driver på utvecklingen. Ofta drabbas urfolk och lokalbefolkning av de många negativa effekterna av exploatering av naturresurser. </p>

      
      <div>
      <p> Den globala efterfrågan på konsumtionsvaror som jordbruksprodukter, metaller och timmer driver på utvecklingen. Ofta drabbas urfolk och lokalbefolkning av de många negativa effekterna av exploatering av naturresurser. </p>

      <Link to="/Quiz" className="btn-primary"  // En länk till sidan "/Quizz"  

>
            Gör vårt quizz
          </Link>
         </div>
    </div>
  );
}