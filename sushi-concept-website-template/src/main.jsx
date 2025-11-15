import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Order from "./order.jsx";
import Item1 from './item1.jsx';
import './style/style.css'; 

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/order" element={<Order />} />
      <Route path="/item1" element={<Item1 />} />
    </Routes>
  </BrowserRouter>
);
