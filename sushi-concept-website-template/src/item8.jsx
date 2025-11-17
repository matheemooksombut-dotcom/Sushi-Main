import { useState } from "react";
import { Link } from "react-router-dom";
import "./style/style.css";

export default function Item8() {
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
            <li><a href="">About</a></li>
            <li><a href="">Contract</a></li>
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
          <br />
         <center><h2 >SET1 SuhiSachimi</h2></center> 
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
