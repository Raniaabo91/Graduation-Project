import React from "react";
import ReactPlayer from "react-player"
import ReactPlayer1 from "react-player"
import { Link } from "react-router-dom";

const Hållbar = () => {
  return (
    <>
      <div class="bakgrund">
        <h1 class="text">Hållbar utveckling</h1>
      <img
      src="https://images.pexels.com/photos/2990647/pexels-photo-2990647.jpeg">
      </img>
      <p className="vanlig1"> Den globala efterfrågan på konsumtionsvaror som jordbruksprodukter, metaller och timmer driver på utvecklingen. Ofta drabbas urfolk och lokalbefolkning av de många negativa effekterna av exploatering av naturresurser. </p>
      <p className="vanlig">En vanlig orsak bakom hot och våld mot miljöförsvarare är exploatering av naturresurser utan tillräcklig hänsyn till de som bor i närheten och deras försörjning. Det skapar djupa konflikter.
      En vanlig orsak bakom hot och våld mot miljöförsvarare är exploatering av naturresurser utan tillräcklig hänsyn till de som bor i närheten och deras försörjning. Det skapar djupa konflikter. </p>
      <div className="videos">
    {/* Denna kod visar två videospelare som använder ReactPlayer-komponenten */}
<ReactPlayer className="video"      height="200px"
width="25%" upp url="https://youtu.be/WkvPdUtYhX8"/>  
               <ReactPlayer1 className="video" height="200px" width="25%"  url="https://youtu.be/HK8LLWSIIm4"/>
      </div>
      <h1 class="text1">Andra bra sidor</h1>
      <Link class="link"to="https://www.naturvardsverket.se/" >
      https://www.naturvardsverket.se/
          </Link>
          <div>
          <Link class="link1"to="https://www.Wwf.se/" >
          https://www.Wwf.se/
          </Link>

          </div>
          </div>
        
    </>
  );
};

export default Hållbar;