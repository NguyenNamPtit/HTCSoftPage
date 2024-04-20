import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/homepage/Home";
import Product from "./pages/products/Product";
import AboutUs from "./pages/aboutUs/AboutUs";
import NotFound from "./pages/404/NotFound";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Producs" element={<Product />} />
            <Route path="About Us" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
