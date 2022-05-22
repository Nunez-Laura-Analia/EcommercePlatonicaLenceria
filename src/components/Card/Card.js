import "./Card.css";
import { useState } from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Modal from "../Modal/Modal";
import ItemCount from "../ItemCount/ItemCount";

const CardItem = () => {
  const [open, setOpen] = useState(false);

  const handClose = () => {
    setOpen(false);
  };

  return (
    <Card className="card-container" sx={{ minWidth: 275 }}>
      <CardContent>
        <div className="card">
          <div>
            <img className="img-productos" src="./colaless-glitter.jpeg" />
          </div>
          <p>TITULO</p>
          <span>$1000</span>
          <ItemCount />
          <div>
            <button className="boton" onClick={() => setOpen(true)}> Ver mas</button>
            <button className="boton" > Agregar al Carrito</button>
          </div>
        </div>
      </CardContent>
      <Modal handClose={handClose} open={open}>
        <img className="img-productos" src="./colaless-glitter.jpeg" />
        <div>
          <p>NOMBRE DEL PRODUCTO</p>
          <p>CARACTERISTICAS DEL PRODUCTO</p>
          <p>OPCION DE COLORES Y TALLES</p>
        </div>
      </Modal>
    </Card>
  );
};

export default CardItem;