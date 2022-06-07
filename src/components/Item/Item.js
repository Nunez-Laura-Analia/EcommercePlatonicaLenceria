import "./Item.css";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";


const Item = ({ image, title, price, id }) => {
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState (false)


  // getLoader(true)

  // useEffect( () => {
  //   getProducts()
  //   .then( (res) => {
  //     setProducts(res)
  //   })
  //   .catch ( (err) => {
  //   })
  //   .finally( () =>{
  //     getLoader(false)
  //   })
  // }, [])
  
  
  const cambiar = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 5000)
  }

  {loader && <Loader/>}

  const handClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ minWidth: 275 }} className="card-container">
      <CardContent>
        <div className="card">
          <div>
            <img className="img-products" src={`/${image}`} alt="producto: bombachas"/>
          </div>
          <div className="titlePrice">
            <h3>{title}</h3>
            <span>${price}</span>            
          </div>

          <div>
            <div className="divDetail">
              <button className="btnDetail" onClick={() => cambiar ()}>
                <Link className="detail" to={"/producto/" + id}>Detalle</Link>
              </button>              
            </div>
          </div>
        </div>
      </CardContent>
      <Modal handClose={handClose} open={open}>
        <img className="img-productos" src={`./${image}`} alt="producto: bombachas"/>
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
