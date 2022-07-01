//importacion react
import { useState } from "react";
import { Link } from "react-router-dom";
//importacion css
import "./Item.css";
//importacion archivos
import Modal from "../Modal/Modal";
//importacion librerias
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Loader from "../Loader/Loader";

const Item = ({ image, title, price, id }) => {
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);

  const changeLoader = () => {
    if (!loader ? <Loader /> : "");
    setLoader(!loader);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  const handClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ minWidth: 275 }} className="card-container">
      <CardContent>
        <Link className="itemLink" to={"/producto/" + id}>
          <div className="card">
            <div>
              <img
                className="img-products"
                src={`/${image}`}
                alt="producto: bombachas"
              />
            </div>
            <div className="titlePrice">
              <h3>{title}</h3>
              <span>${price}</span>
            </div>
            <div>
              <div className="divDetail">
                <button className="btnDetail" onClick={() => changeLoader()}>
                  Detalle
                </button>
              </div>
            </div>
          </div>
        </Link>
      </CardContent>
      <Modal handClose={handClose} open={open}>
        <img
          className="img-productos"
          src={`./${image}`}
          alt="producto: bombachas"
        />
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
