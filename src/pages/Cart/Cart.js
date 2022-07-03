//importacion react
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//importacion firebase
import { addDoc, collection } from "firebase/firestore";
import db from "../../utils/firebaseConfig";
//importacion archivos
import CartContext from "../../context/CartContext";
import Modal from "../../components/Modal/Modal";
//importacion css
import "./Cart.css";
//importacion librerias
import { Container } from "@mui/material";
import { Delete } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const Cart = () => {
  const { cartListItems, totalPrice, removeProduct, cleanCart } =
    useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState();
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    email: "",
    email2: "",
  });

  const [order, setOrder] = useState({
    buyer: {},
    items: cartListItems.map((data) => {
      return {
        id: data.data.id,
        title: data.data.title,
        price: data.data.price,
      };
    }),
    total: totalPrice(),
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
    setSuccess(orderDoc.id);
    cleanCart();
  };

  return (
    <Container>
      <h2 className="titleCart">CHECKOUT</h2>
      <div>
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
              <div className="cart tableCart">
                <img className="imgCart" src={`/${image}`} alt="productos" />
              </div>
              <div className="cart">
                <p className="descriptionCart tableCart">{title}</p>
              </div>
              <div className="cart">
                <p className="priceCart tableCart">$ {price}</p>
              </div>
              <div className="cart">
                <p className="quantityCart tableCart">{data.count}</p>
              </div>
              <div className="cart tableCart">
                <button className="btnDeleteIcon">
                  <Delete onClick={() => removeProduct(data.data)} />
                </button>
              </div>
            </div>
          );
        })}
        {cartListItems.length === 0 && (
          <>
            <div className="removeIconDiv">
              <div>
                <p>Tu carrito se encuentra vacío.</p>
              </div>
              <div>
                <p>Dirígite al incio para empezar a comprar.</p>
              </div>
              <div>
                <RemoveShoppingCartIcon />
              </div>
            </div>
          </>
        )}
        <div className="cart-footer">
          <button className="selectorAdd selector">
            <Link className="linkCart" to="/product">
              Seguir Comprando
            </Link>
          </button>
          <div>
            <div className="cart-checkout__subtotal">
              <h6>Subtotal</h6>
              <span>$ {totalPrice()}</span>
            </div>
            <div className="cart-checkout__total">
              <h4>Total</h4>
              <span>$ {totalPrice()}</span>
            </div>
            <button
              className="selectorAdd selector"
              onClick={() => setShowModal(true)}
            >
              Completar Compra
            </button>
          </div>
        </div>
      </div>
      <Modal
        title={
          success ? <h3>COMPRA EXITOSA</h3> : <h3>FORMULARIO DE CONTÁCTO</h3>
        }
        open={showModal}
        handleClose={() => setShowModal(false)}
      >
        {success ? (
          <div className="purchaseForm">
            <h5>La order se generó con éxito!</h5>
            <h6>Número de orden: {success}</h6>
            <button className="selectorAdd selector" onClick={finishOrder}>
              Aceptar
            </button>
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
              label="Email"
              variant="outlined"
              value={formValue.email}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              name="email2"
              label="Reingrese su Email"
              value={formValue.email2}
              variant="outlined"
              onChange={handleChange}
            />
            <button className="btnFormCart" type="submit">
              Enviar Pedido
            </button>
          </form>
        )}
      </Modal>
    </Container>
  );
};

export default Cart;
