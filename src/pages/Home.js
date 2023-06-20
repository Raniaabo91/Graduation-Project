import React from "react";
import { Link } from "react-router-dom";
import Bild1 from"../images/Bild1.png";
import Bild2 from"../images/Bild2.png";
import Bild3 from"../images/Bild3.jpeg";
import back from "../images/back.jpeg"


const Home = () => {
  return (
    <>
    <div>
      <div class="bakgrund">
      <img
      src={back}>
        

      </img>
               </div>
               <div class="padding">

          
               <Link to="/Koldioxid" className="click">
<img src={Bild1}></img>

    <p>Koldioxid</p>
</Link>
<Link to="/Temperatur" className="click1">
    <img src={Bild2}></img> 
    <p>Temperatur</p>
</Link>
<Link to="/Glaciärer" className="click2">
    <img src={Bild3}></img>
    <p>Glaciärer</p>
</Link>
<Link to="/Havsnivå" className="click3">
    <img src="https://cdn-icons-png.flaticon.com/512/1163/1163741.png?w=740&t=st=1672856626~exp=1672857226~hmac=74f05ce284866a65ae436480d2a1e067cb1eb998067af00fec26281eb15086b5"></img>
    <p>Havsnivå</p>
</Link>
</div>

<div>
<a target="_blank" href="/Hållar" className="Hållar">
   <img
       src="https://images.pexels.com/photos/45208/world-earth-planet-globe-45208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       alt="Linkedin"                     
    />
<p>Hållbar utveckling</p>
 </a>
 </div>    
            </div>
    </>
  );
};
export default Home;