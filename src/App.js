import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Contacto from "./pages/Contacto";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";
import NotFound from "./pages/NotFound";
import Producto from "./pages/Producto";
import Productos from "./pages/Productos";
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App"> 
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product" element={<Productos/>}/>
            <Route path="/producto/:id" element={<Detail/>}/>
            <Route path="/productos/:category" element={<Producto/>}/>
            <Route path="/preguntasfrecuentes" element={<PreguntasFrecuentes/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
    
  );
}

export default App;
