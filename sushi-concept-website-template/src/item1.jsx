import React from "react";
import { Link } from "react-router-dom";
import './style/style.css'; 
import { pushminus } from "../../JS/Script";

export default function Item1(){

return(
    <>
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

        <div className="itempage">
            <div className="pic-content">
                <img src="https://www.educatepark.com/wp-content/uploads/2015/01/Image.jpg" alt="" />

            </div>


             <div className="item-content">
                <div className="data">
                    <form id="fromid" className="dataitem" action="">
                      <span style={{color : "aliceblue"}} >รายการ : </span> <input  className="style-input" type="number" defaultValue={1} min={1} readOnly />
                      <br />
                      <span style={{color : "aliceblue"}} >ราคา : </span> <input  className="style-input2" type="number" defaultValue={120} min={120} readOnly />
                      <br />
                      <br />
                        <div className="btn-flex">
                                    
                                    <button type="button" class="btn-qty minus">−</button>
                                    <button type="button" class="btn-qty plus">+</button>

                        </div>
                    </form>
                </div>
                
            </div>
         
                

           
        </div>

    </>



       

);}