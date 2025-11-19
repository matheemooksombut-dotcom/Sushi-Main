import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Order from "./order.jsx";
import Item1 from './Item1.jsx';
import Item2 from './item2.jsx';
import Item3 from './item3.jsx';
import Item4 from './item4.jsx';
import Item5 from './item5.jsx';
import Item6 from './item6.jsx';
import Item7 from './item7.jsx';
import Item8 from './item8.jsx';
import Item9 from './item9.jsx';
import About from './about.jsx';
import Register from './Register.jsx'; 
import './style/style.css'; 

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/order" element={<Order />} />
      <Route path="/Item1" element={<Item1 />} />
      <Route path="/item2" element={<Item2 />} />
      <Route path="/item3" element={<Item3 />} />
      <Route path="/item4" element={<Item4 />} />
      <Route path="/item5" element={<Item5 />} />
      <Route path="/item6" element={<Item6 />} />
      <Route path="/item7" element={<Item7 />} />
      <Route path="/item8" element={<Item8 />} />
      <Route path="/item9" element={<Item9 />} />
      <Route path="/about" element={<About />} />
      <Route path="/Register" element={<Register />} />

    </Routes>
  </BrowserRouter>
);
