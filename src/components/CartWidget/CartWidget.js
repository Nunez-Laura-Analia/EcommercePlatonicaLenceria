//importacion react
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
//importacion archivos
import CartContext from "../../context/CartContext";
// importacion css
import "./CartWidget.css";
//importacion librerias
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import Menu from "@mui/material/Menu";

const CartWidget = () => {
  const { cartListItems, removeProduct, cleanCart, totalPrice } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="cart-container-icon">
      <p className="cartCount">{cartListItems.length}</p>
      <ShoppingCartIcon
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="container-item-list-cart">
          {cartListItems.length === 0 && (
            <>
              <div className="divEmptyCart">
                <p className="emptyCart">Aun no hay productos agregados</p>
                <button className="btnEmpty">
                  <Link className="linkCart" to="/product">
                    Empezar a comprar
                  </Link>
                </button>
              </div>
            </>
          )}

          {cartListItems.map((data) => {
            const { id, title, image, price } = data.data;
            return (
              <>
                <div key={id}>
                  <div className="cartWidget">
                    <div>
                      <img className="imgCartWidget" src={`/${image}`} alt="" />
                    </div>
                    <div className="cartInfo">
                      <p>{title}</p>
                      <p> ${price}</p>
                      <p>Cantidad: {data.count}</p>
                    </div>
                    <div className="cartDelete">
                      <button className="btnDelete">
                        <DeleteIcon onClick={() => removeProduct(data.data)} />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          {cartListItems.length !== 0 && (
            <div className="cleanCart">
              <h5>Precio Final</h5>
              <p>${totalPrice()}</p>
              <button
                className="selectorAdd selector btnCart"
                onClick={cleanCart}
              >
                Vaciar Carrito
              </button>
              <button className="selectorAdd selector btnCart">
                <Link className="linkCart" to="/cart">
                  Ver carrito
                </Link>
              </button>
            </div>
          )}
        </div>
      </Menu>
    </div>
  );
};

export default CartWidget;
