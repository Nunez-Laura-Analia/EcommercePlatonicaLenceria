import "./Card.css";
import { useState } from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Modal from "../Modal/Modal";

const CardItem = () => {
  const [open, setOpen] = useState(false);
  const[count, setCount] = useState(0)

  const handClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className="card">
          <div>
            <img src="./colaless-glitter.jpeg" />
          </div>
          <p>TITULO</p>
          <span>$1000</span>
          <div className="contador">
              <button onClick={() => setCount(count - 1)} disabled={count==0}>-</button>
              <p>{count}</p>
              <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          <div>
            <button onClick={() => setOpen(true)}> Ver mas</button>
            <button > Agregar al Carrito</button>
          </div>
        </div>
      </CardContent>
      <Modal handClose={handClose} open={open}>
        <img src="./colaless-glitter.jpeg" />
      </Modal>
    </Card>
  );
};

export default CardItem;
