import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.png";
export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  //State-objektet "isOpen" används för att hålla 
  //reda på om navbaren ska visas eller inte. När toggle-knappen trycks 
 // på, anropas funktionen "handleToggle", som uppdaterar "isOpen" till 
 // motsatt värde. Klassen på "ul" elementet ändras beroende på värdet på "isOpen".

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
          <Link to="/">
              <img id="logo" src={logo} alt="klimat" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >


{/*Länkarna till de olika sidorna är definierade med "Link" från "react-router-dom"*/}

            <li>

              <Link to="/">Startsida</Link>
           
           </li>
           <li>

              <Link to="/Koldioxid">Koldioxid</Link>
            </li>
            <li>
              <Link to="/Temperatur">Temperatur </Link>
           </li>
           <li>
              <Link to="/Glaciärer">Glaciärer </Link>
              </li>
              <li>
              <Link to="/Havsnivå">Havsnivå </Link>
              </li>
              <li>
              <Link to="/Hållar">Hållbar utveckling </Link>
              </li>
              <li>
              <Link to="/Omoss">Om oss </Link>

              </li>
           
            
            
            
          </ul>
        </div>
      </nav>
    );
  }
}