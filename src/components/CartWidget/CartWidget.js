import "./CartWidget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import Menu from "@mui/material/Menu";
import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cartListItems, removeProduct, cleanCart, totalQuantity } = useContext(CartContext);
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
      <ShoppingCartIcon
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <p style={{ color: "pink" }}>{cartListItems.length}</p>
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
                <button className="selectorAdd selector">
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
                      <img className="imgCartWidget" src={`/${image}`} alt=""/>
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
