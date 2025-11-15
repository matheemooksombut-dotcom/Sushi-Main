import React from "react";
import { Link } from "react-router-dom";
import './style/style.css'; 

export default function Order() {
    return (
        <div>

            {/* Navbar */}
            <nav className="menu-wraper">
                <div className="logo">
                    <img src="/logo.png" alt="Logo" />
                </div>

                <div className="ls-menu">
                    <ul className="menu">
                        <li className="menu-1">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="menu-2">
                            <Link to="/order">Product</Link>
                        </li>
                        <li className="menu-3">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="menu-4">
                            <Link to="/contact">Contract</Link>
                        </li>
                    </ul>
                </div>

                <div className="hamberger-bar">
                    <i style={{ color: "aliceblue" }} className="fa-solid fa-bars fa-bounce"></i>
                </div>
            </nav>

            {/* Content */}
            <div className="contentwraper">
                <div className="orederall">
  
                    {/* 1 */}
                    <div>
                        <div className="order1">
                            <Link to="/item1"><img src="https://www.educatepark.com/wp-content/uploads/2015/01/Image.jpg" alt="" /></Link>
                        </div>
                        <br /><br />
                        <div style={{ color: "aliceblue" }}>Lorem ipsum dolor sit amet consectetur. <Link to="/item1">สั่งสินค้า</Link> </div>
                    </div>

                    {/* 2 */}
                    <div>
                        <div className="order2">
                            <Link to="/item2"><img src="/sushirow.png" alt="" /></Link>
                        </div>
                        <br /><br />
                        <div style={{ color: "aliceblue" }}>Lorem ipsum dolor sit amet consectetur. <Link to="/item2">สั่งสินค้า</Link></div>
                    </div>

                    {/* 3 */}
                    <div>
                        <div className="order3">
                           <Link to="/item3"><img src="/sushisalmon.png" alt="" /></Link> 
                        </div>
                        <br /><br />
                        <div style={{ color: "aliceblue" }}>Lorem ipsum dolor sit amet consectetur. <Link to="/item3">สั่งสินค้า</Link></div>
                    </div>

                    {/* 4 */}
                    <div>
                        <div className="order4">
                            <Link to="/item4"><img src="/image.png" alt="" /></Link>
                        </div>
                        <br /><br />
                        <div style={{ color: "aliceblue" }}>Lorem ipsum dolor sit amet consectetur. <Link to="/item4">สั่งสินค้า</Link></div>
                    </div>

                    {/* 5 */}
                    <div>
                        <div className="order5">
                            <Link to="/item5"><img src="/ssushi.jpg" alt="" /></Link>
                        </div>
                        <br /><br />
                        <div style={{ color: "aliceblue" }}>Lorem ipsum dolor sit amet consectetur. <Link to="/item5">สั่งสินค้า</Link></div>
                    </div>

                    {/* 6 */}
                    <div>
                        <div className="order6">
                           <Link to="/item6"><img src="/rice.jpg" alt="" /></Link> 
                        </div>
                        <br /><br />
                        <div style={{ color: "aliceblue" }}>Lorem ipsum dolor sit amet consectetur. <Link to="/item6">สั่งสินค้า</Link></div>
                    </div>

                    {/* 7 */}
                    <div>
                        <div className="order7">
                           <Link to="/item7"><img src="https://i.ytimg.com/vi/_SJfXONxEz8/hq720.jpg" alt="" /></Link> 
                        </div>
                        <br /><br />
                        <div style={{ color: "aliceblue" }}>Lorem ipsum dolor sit amet consectetur. <Link to="/item7">สั่งสินค้า</Link></div>
                    </div>

                    {/* 8 */}
                    <div>
                        <div className="order8">
                            <Link to="/item8"><img src="/reme.jpg" alt="" /></Link>
                        </div>
                        <br /><br />
                        <div style={{ color: "aliceblue" }}>Lorem ipsum dolor sit amet consectetur. <Link to="/item8">สั่งสินค้า</Link></div>
                    </div>

                    {/* 9 */}
                    <div>
                        <div className="order9">
                            <Link to="/item9"><img src="/jp-food-1.jpg" alt="" /></Link>
                        </div>
                        <br /><br />
                        <div style={{ color: "aliceblue" }}>Lorem ipsum dolor sit amet consectetur. <Link to="/item9">สั่งสินค้า</Link></div>
                    </div>

                </div>
            </div>

        </div>
    );
}
