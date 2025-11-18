import { useState } from "react";
import { Link } from "react-router-dom";
import "./style/style.css";

export default function Item4() {
  const [qty, setQty] = useState(1);

  return (
    <div className="bodyp">
      <nav className="menu-wraper">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>

        <div className="ls-menu">
          <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><Link to="/order">Product</Link></li>
            <li className="menu-3"><Link to="/about">About</Link></li>
            <li><a href="">Cart</a></li>
          </ul>
        </div>

        <div className="hamberger-bar">
          <i style={{ color: "aliceblue" }} className="fa-solid fa-bars fa-bounce"></i>
        </div>
      </nav>

      <div className="itempage">
        <div className="pic-content">
          <img src="/image.png" alt="" />
        </div>

        <div className="item-content">
          <br />
         <center><h2 style={{color:"aliceblue"}} >SET4</h2></center> 
          <div className="data">
            <form id="fromid" className="dataitem" action="">
              <span style={{color:"aliceblue"}}>รายการ: </span>
              <input className="style-input" type="number" value={qty} readOnly />

              <br />

              <span style={{color:"aliceblue"}}>ราคา: </span>
              <input className="style-input2" type="number" value={120 * qty} readOnly />

              <br /><br />

              <div className="btn-flex">
                <button className="btn-qty minus" type="button" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <button className="btn-qty plus" type="button" onClick={() => setQty(qty + 1)}>+</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
