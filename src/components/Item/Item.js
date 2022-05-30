import "./Item.css";
import { useState } from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Modal from "../Modal/Modal";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({image, title, price,stock, initial}) => {
  const [open, setOpen] = useState(false);

  function onAdd (count) {
    console.log ("Agregaste " + count + " productos al carrito")
  }

  const handClose = () => {
    setOpen(false);
  };

  return (
    <Card className="card-container" sx={{ minWidth: 275 }}>
      <CardContent>
        <div className="card">
          <div>
            <img className="img-productos" src={`./${image}`} />
          </div>
          <h3>{title}</h3>
          <span>${price}</span>
          <div>
            <ItemCount stock= {stock} initial={initial} onAdd={onAdd}/>
            <button className="boton" onClick={() => setOpen(true)}> Ver mas</button>
          </div>
        </div>
      </CardContent>
      <Modal handClose={handClose} open={open}>
        <img className="img-productos" src={`./${image}`} />
        <div>
          <p>NOMBRE DEL PRODUCTO</p>
          <p>CARACTERISTICAS DEL PRODUCTO</p>
          <p>OPCION DE COLORES Y TALLES</p>
        </div>
      </Modal>
    </Card>
  );
};

export default Item;