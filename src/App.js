import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Hållar from "./pages/Hållar";
import Navbar from "./components/Navbar";
import Quiz from "./pages/Quiz"
import Quiz1 from "./pages/Quiz1"

import Koldioxid from "./pages/Koldioxid"
import Temperatur from "./pages/Temperatur"
import Glaciärer from "./pages/Glaciärer"
import Havsnivå from "./pages/Havsnivå"

import Omoss from "./pages/Omoss"
import Footer from "./components/Footer"




import {BrowserRouter, Routes, Route } from 'react-router-dom';
//Här definieras en funktion som heter "App", vilket är huvudkomponenten i applikationen. Inom funktionen definieras de olika komponenterna och sidorna som används i applikationen.

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "Hållar" element = {<Hållar />} />
      <Route path = "Quiz" element = {<Quiz />} />
      <Route path = "Quiz1" element = {<Quiz1 />} />

      <Route path = "Koldioxid" element = {<Koldioxid />} />
      <Route path = "Temperatur" element = {<Temperatur />} />
      <Route path = "Omoss" element = {<Omoss />} />
      <Route path = "Glaciärer" element = {<Glaciärer/>} />
      <Route path = "Havsnivå" element = {<Havsnivå/>} />


</Routes>
      </BrowserRouter>
      <Footer/>

      </>
  );
}

export default App;


