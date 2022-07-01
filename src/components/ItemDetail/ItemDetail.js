//importacion react
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
//importacion archivos
import CartContext from "../../context/CartContext";
//importacion css
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
//importacion librerias
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import DiamondIcon from "@mui/icons-material/Diamond";

const ItemDetail = ({ data }) => {
  const [showButton, setShowButton] = useState(false);
  const { addProductToCart } = useContext(CartContext);

  function onAdd(count) {
    addProductToCart({ data, count });
    setShowButton(true);
  }

  return (
    <>
      <div className="itemDetail">
        <div className="imgContainer">
          <img
            className="imgDetail"
            src={`/${data.image}`}
            alt="imagen producto: Bombachas"
          />
        </div>
        <div className="infoDetail">
          <h2>{data.title}</h2>
          <p>MATERIAL: {data.material} </p>
          <p>
            {data.materialAdicional}
            <DiamondIcon />
          </p>
          <h4>$ {data.price}</h4>
          <p className="size">Talle disponible {data.talle}</p>
          <div>
            <button className="sizeSelector">U</button>
          </div>
          <div>
            <p className="colors">COLORES</p>
          </div>
          <div className="color-group-selector">
            <button className="color-selector black"></button>
            <button className="color-selector white"></button>
            <button className="color-selector red"></button>
            <button className="color-selector pink"></button>
            <button className="color-selector blue"></button>
            <button className="color-selector grey"></button>
          </div>
          <div className="selectorContainer">
            {!showButton ? (
              <ItemCount
                stock={data.stock}
                setShowButton={setShowButton}
                onAdd={onAdd}
                initial={data.initial}
              />
            ) : (
              <>
                <button
                  className="selectorAdd selector"
                  onClick={() => onAdd()}
                >
                  {" "}
                  <Link className="linkAdd" to="/cart">
                    Terminar mi compra
                  </Link>
                </button>
                <button className="selectorAdd selector">
                  <Link className="linkCart" to="/product">
                    Seguir Comprando
                  </Link>
                </button>
              </>
            )}
          </div>
          <p className="detailDescription">{data.description}</p>
          <p className="detailDescription">{data.generalDescription}</p>
          <p></p>
          <p>Compartir</p>
          <div className="network">
            <WhatsAppIcon className="networkLogo" />
            <InstagramIcon className="networkLogo" />
            <FacebookIcon className="networkLogo" />
          </div>
          <div className="info">
            <p>COSTOS Y TIEMPOS DE ENTREGA</p>
            <p>CAMBIOS Y DEVOLUCIONES</p>
            <p>CUIDADOS DE LA PRENDA</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
