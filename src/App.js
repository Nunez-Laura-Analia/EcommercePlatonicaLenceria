//importacion react
import { BrowserRouter, Routes, Route } from "react-router-dom";
//importacion css
import "./App.css";
//importacion archivos
import { CartProvider } from "./context/CartContext";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Contacto from "./pages/Contacto/Contacto";
import PreguntasFrecuentes from "./pages/PregFrec/PreguntasFrecuentes";
import NotFound from "./pages/NotFound/NotFound";
import Producto from "./pages/Producto/Producto";
import Productos from "./pages/Productos/Productos";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Productos />} />
            <Route path="/producto/:id" element={<Detail />} />
            <Route path="/productos/:category" element={<Producto />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/preguntasfrecuentes"
              element={<PreguntasFrecuentes />}
            />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
