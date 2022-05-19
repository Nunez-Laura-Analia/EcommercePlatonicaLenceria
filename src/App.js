import "./App.css";
import NavBar from './components/NavBar/NavBar';
import CardList from "./components/CardList/CardList";
import Modal from "./components/Modal/Modal";
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false)
  const handClose = () => {
    setOpen(false)
  }
  return (
    <div className="App">
      <NavBar />
      <div className="container-card">
        <CardList />
      </div>
      <button onClick={() =>setOpen(true)}>Abrir Modal</button>
      <Modal handClose={handClose} open={open}>
        <h1>hola</h1>
      </Modal>
    </div>
    
  );
}

export default App;
