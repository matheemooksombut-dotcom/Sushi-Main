import { useState , useEffect } from 'react'

// import './App.css'
import './style/style.css'; 
import { Link } from "react-router-dom";
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


function App() {
  
  // const [message, setMessage] = useState("")

  // useEffect(()=>{
  //   axios.get('/api/test').then(res=>{
  //     setMessage(res.data)
  //   })
  // },[])
  

 return (
    <div>
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
            <li className="menu-3"><Link to="/about">About</Link></li>
            <li className="menu-4"><a href="">Cart</a></li>
            <li><Link to=""><i class="fa-solid fa-user fa-lg"></i></Link></li>
          </ul>
        </div>

        <div className="hamberger-bar">
          <i style={{ color: "aliceblue" }} className="fa-solid fa-bars fa-bounce"></i>
        </div>
      </nav>

      <header className="main-header">
        <div className="content-title">
          <h1>Title Here</h1>
          <br />
          <br />
          <div className="content-paragrhap">
            <i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                dolorem quidem doloremque ratione perspiciatis eligendi nulla eos
                tempora. Minima, optio.
              </p>
            </i>
            <br />
            <br />
            <button className="btn" onClick={() => (window.location.href = "/order")}>
              <h2>ORDER NOW</h2>
            </button>
          </div>
        </div>
      </header>

      {/* Popular Menu */}
      <section className="Popular-Menu">
        <div className="content-popular">
          <h1>Popular-Menu</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolore hic
            voluptas voluptatum ducimus iusto doloribus, saepe minus officiis,
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, praesentium.</p>

          <div className="menuItem">
            <div className="I-1">
              <img src="/sushisalmon.png" alt="" />
              <div>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium laborum
                </p>
              </div>
            </div>

            <div className="I-2">
              <img src="/sushirow.png" alt="" />
              <div>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium laborum quae
                </p>
              </div>
            </div>

            <div className="I-3">
              <img src="/image.png" alt="" />
              <div>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium laborum quae
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Title 2 */}
      <section className="title2">
        <div className="content-title2">
          <div className="img-title2">
            <img src="/sushisalmon.png" alt="" />
          </div>

          <div className="content2">
            <h1>Title Here</h1>
            <br />
            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa natus
              dicta mollitia quaerat, tempore expedita maxime. Incidunt excepturi
              corrupti doloribus reiciendis veniam.
            </p>
            <br />
            <br />
            <button className="btn" onClick={() => (window.location.href = "/order")}>
              <h2>ORDER NOW</h2>
            </button>
          </div>
        </div>
      </section>

      {/* Title 3 */}
      <section className="title3">
        <div className="content-title3">
          <div className="content3">
            <h1>Title Here</h1>
            <br />
            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa natus
              dicta mollitia quaerat, tempore expedita maxime. Incidunt excepturi
              corrupti doloribus reiciendis veniam.
            </p>
            <br />
            <br />
            <button className="btn" onClick={() => (window.location.href = "/order")}>
              <h2>ORDER NOW</h2>
            </button>
          </div>

          <div className="img-title3">
            <img src="/sushirow.png" alt="" />
          </div>
        </div>
      </section>

      {/* More */}
      <section className="more">
        <div className="content-more">
          <div className="morecontent">
            <div className="title-more">
              <h1>Title here</h1>
              <br />
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis minus commodi ratione totam minima adipisci, vero
                voluptas odio consectetur earum!
              </p>
              <br />
              <br />

              <div className="felx-contract">
                <a href="https://www.instagram.com/"> 
                  
                  <i className="fa-brands fa-instagram fa-beat-fade fa-lg"></i> 
                </a>
                <a href="https://www.facebook.com/?locale=th_TH">
                  <i className="fa-brands fa-facebook fa-beat-fade fa-lg"></i>
                </a>
                <a href="https://x.com/?lang=th">
                  
                  
                </a>
              </div>
            </div>

            <div className="about-more">
              <h1>About</h1>
              <br />
              <br />
              <ul className="about-display">
                <li>History</li>
                <br />
                <li>Out tream</li>
                <br />
                <li>Contract</li>
                <br />
                <li>Chef</li>
              </ul>
            </div>

            <div className="services-more">
              <h1>Services</h1>
              <br />
              <br />
              <ul className="Services-display">
                <li>History</li>
                <br />
                <li>Out tream</li>
                <br />
                <li>Contract</li>
                <br />
                <li>Chef</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
  
}





export default App;