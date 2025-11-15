import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Order from "./order.jsx";
import Item1 from './item1.jsx';
import Item2 from './item2.jsx';
import Item3 from './item3.jsx';
import Item4 from './item4.jsx';
import Item5 from './item5.jsx';
import Item6 from './item6.jsx';
import Item7 from './item7.jsx';
import Item8 from './item8.jsx';
import Item9 from './item9.jsx';

import './style/style.css'; 

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/order" element={<Order />} />
      <Route path="/item1" element={<Item1 />} />
      <Route path="/item1" element={<Item2 />} />
      <Route path="/item1" element={<Item3 />} />
      <Route path="/item1" element={<Item4 />} />
      <Route path="/item1" element={<Item5 />} />
      <Route path="/item1" element={<Item6 />} />
      <Route path="/item1" element={<Item7 />} />
      <Route path="/item1" element={<Item8 />} />
      <Route path="/item1" element={<Item9 />} />

    </Routes>
  </BrowserRouter>
);
