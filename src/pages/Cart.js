import "./Cart.css";
import Modal from "../components/Modal/Modal";
import { useContext, useState } from "react";
import { Container } from "@mui/material";
import { Delete } from "@mui/icons-material";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { addDoc, collection } from "firebase/firestore";
import db from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartListItems, totalPrice, removeProduct, cleanCart} = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState();
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [order, setOrder] = useState({
    buyer: {},
    items: cartListItems.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: item.price,
      };
    }),
    total: totalPrice,
  });

  const navigate = useNavigate();

  const finishOrder = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrder({ ...order, buyer: formValue });
    saveData({ ...order, buyer: formValue });
  };

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const saveData = async (newOrder) => {
    const orderFirebase = collection(db, "ordenes");
    const orderDoc = await addDoc(orderFirebase, newOrder);
    console.log("orden generada: ", orderDoc.id);
    setSuccess(orderDoc.id);
    cleanCart();
  };

  return (
    <Container className="container-general">
      <h2>Checkout: </h2>
      <div className="cart-section">
        <div className="col-cart-table__head">
          <h5>Producto</h5>
          <h5>Descripcion</h5>
          <h5>Precio Unitario</h5>
          <h5>Cantidad</h5>
          <h5>Quitar</h5>
        </div>
        {cartListItems.map((data) => {
          const { id, title, image, price } = data.data;
          return (
            <div className="cart-table__content" key={id}>
              <div className="cart-table__content-img">
                <img className="imgCart" src={`/${image}`} alt="productos" />
              </div>
              <div className="cart-table__content-title">
                <p>{title}</p>
              </div>
              <div className="cart-table__content-price">
                <p>$ {price}</p>
              </div>
              <div className="cart-table__content-quantity">
                <p>{data.count}</p>
              </div>
              <div className="cart-table__content-price">
                <button className="btnDeleteIcon btn">
                  <Delete onClick={() => removeProduct(data.data)} />
                </button>
              </div>
            </div>
          );
        })}
        <div className="cart-footer">
          <button className="selectorAdd selector cart">
            <Link className="linkCart" to="/product">
              Seguir Comprando
            </Link>
          </button>
          <div className="cart-checkout-details">
            <div className="cart-checkout__subtotal">
              <p>Subtotal</p>
              <span>$ {totalPrice()}</span>
            </div>
            <div className="cart-checkout__total">
              <p>Total</p>
              <span>$ {totalPrice()}</span>
            </div>
            <button className='selectorAdd selector cart' onClick={() => setShowModal(true)}>Completar Compra</button>
          </div>
        </div>
      </div>
      <Modal 
        title={success ? "Compra exitosa" : "Formulario de contacto"}
        open={showModal}
        handleClose={() => setShowModal(false)}
      >
        {success ? (
          <div>
            La order se genero con exito! Numero de orden: {success}
            <button onClick={finishOrder}>Aceptar</button>
          </div>
        ) : (
          <form className="form-contact" onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              name="name"
              label="Nombre y Apellido"
              variant="outlined"
              value={formValue.name}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              name="phone"
              label="Telefono"
              variant="outlined"
              value={formValue.phone}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              name="email"
              label="Mail"
              value={formValue.email}
              variant="outlined"
              onChange={handleChange}
            />
            <button type="submit">Enviar</button>
          </form>
        )}
      </Modal>
    </Container>
  );
};

export default Cart;
