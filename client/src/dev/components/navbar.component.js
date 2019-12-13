import React from 'react';
import '../styles/navbar.css';


function NavBar() {
    function toggleFunc() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    return(
 <div className="topnav" id="myTopnav">
  <a href="/" className="active">Home</a>
  <a href="/refs">Reference</a>
  <a href="/contact">Contact</a>
  <div className="dropdown">
    <button className="dropbtn">Products 
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="/makeup">MakeUp</a>
      <a href="/#">Parfumes</a>
      <a href="/#">shampo & lotions</a>
    </div>
  </div> 
  <a href="/about">About</a>
  <a href="#/" className="icon" onClick={toggleFunc} >&#9776;</a>
 </div>
    );
}


export default NavBar;
