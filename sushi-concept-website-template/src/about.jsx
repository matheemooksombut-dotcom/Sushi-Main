import { useState } from "react";
import { Link } from "react-router-dom";
import "./style/style.css";

export default function About() {
  const [qty, setQty] = useState(1);

  return (
    <div className="bodyp">
      <nav className="menu-wraper">
        <div className="logo">
         <Link to="/"><img src="/logo.png" alt="Logo" /></Link> 
        </div>

        <div className="ls-menu">
          <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><Link to="/order">Product</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="">Contract</a></li>
          </ul>
        </div>

        <div className="hamberger-bar">
          <i style={{ color: "aliceblue" }} className="fa-solid fa-bars fa-bounce"></i>
        </div>
      </nav>

      <div className="itempage2">

        <div className="titleabout">
            <h1>ABOUT</h1>

        </div>

        <div className="bookingabout">
            <p style={{ color: "aliceblue" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis placeat corrupti nemo doloremque, odit vel! Lorem ipsum dolor sit.</p>
        </div>
           
            
            
      </div>

      <div className="about-content">
        <br />
        <br />
        <br />
        <br />
        <div className="content1-a">
            <div className="pa">
                <img src="" alt="" />
            </div>
            <br />
            <br />
            <p> OPEN : 9:00 AM - 18:00PM</p>
            <br />
            <p> TELL : 0123456789</p>
            <br />
           <Link to="https://www.google.com/maps/@13.6761404,101.0824919,11z?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"><p style={{color: "black"}}> Location :  https://www.google.com/maps</p></Link>

        </div>
        

        
      </div>
    </div>
  );
}
