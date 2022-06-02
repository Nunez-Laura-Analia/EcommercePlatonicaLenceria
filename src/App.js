import "./App.css";
import { BrowserRouter, Routes, Reute, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Modal from "./components/Modal/Modal";
import { useState } from 'react';
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Contacto from "./pages/Contacto";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";
import NotFound from "./pages/NotFound";
import Producto from "./pages/Producto";

function App() {
  const [open, setOpen] = useState(false)

  const handClose = () => {
    setOpen(false)
  }

  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/producto/:id" element={<Detail/>}/>
          <Route path="/productos/:category" element={<Producto/>}/>
          <Route path="/preguntasfrecuentes" element={<PreguntasFrecuentes/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      
      </BrowserRouter>
      
      {/* <button onClick={() =>setOpen(true)}>Abrir Modal</button>
      <Modal handClose={handClose} open={open}>
        <h1>hola</h1>
      </Modal> */}

    </div>
    
  );
}

export default App;
