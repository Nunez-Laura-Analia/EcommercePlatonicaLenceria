import "./CartWidget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import Menu from "@mui/material/Menu";
import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cartListItems } = useContext(CartContext);
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
              <p>Aun no hay productos agregados</p>
              <Link to="/productos">Empezar a comprar</Link>
            </>
          )}

          {cartListItems.map((data) => {
            return (
              <div className="item-cart-prod cartWidget" key={data.id}>
                <div className="cart-prod__image">
                  <img className="imgCartWidget" src={`/${data.image}`} />
                </div>
                <div className="cart-prod__info">
                  <p>{data.title}</p>
                  <span> ${data.price}</span>
                </div>
                <div className="cart-prod__action">
                  <button className="btnDeleteIcon btn">
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Menu>
    </div>
  );
};

export default CartWidget;
