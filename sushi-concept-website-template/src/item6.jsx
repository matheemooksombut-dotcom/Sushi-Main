import React from "react";
import { Link } from "react-router-dom";
import './style/style.css'; 

export default function Item6(){

return(
    <nav className="menu-wraper">
        <div className="logo">
          <img
            src="/logo.png"
            alt="Logo"
          />
        </div>

        <div className="ls-menu">
          <ul className="menu">
            <li className="menu-1"><a href="/">Home</a></li>
            <li className="menu-2"><Link to="/order">Product</Link></li>
            <li className="menu-3"><a href="">About</a></li>
            <li className="menu-4"><a href="">Contract</a></li>
          </ul>
        </div>

        <div className="hamberger-bar">
          <i style={{ color: "aliceblue" }} className="fa-solid fa-bars fa-bounce"></i>
        </div>
      </nav>
);

}