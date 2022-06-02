import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const NavBar = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const categories = ["Colaless", "Vedetinas", "Culottes"]
  
  return (
    <AppBar position="static" className="header-primary">
      <Toolbar className="tool">
        <div className="container-logo">
        <Link className="link" to="/"><img src="/platonica.png"/></Link>
          
        </div>
        <ul className="navbar">
          <li>
            <Button
              disableRipple
              style={{ backgroundColor: "transparent" }}
              variant="text"
              className="navbar__btn"
            >
              <Link className="link" to="/">Inicio</Link>
            </Button>
          </li>
          <li>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined} 
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              disableRipple
              style={{ backgroundColor: "transparent" }}
              variant="text"
              className="navbar__btn"
            >
              <Link className="link" to="/product">Productos</Link>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {categories.map((cat) => {
                return (
                  <MenuItem onClick={handleClose}>
                    <Link className="link" to={`/productos/${cat}`}>{cat}</Link>
                  </MenuItem>
                );
              })}
            </Menu>
          </li>
          <li>
            <Button
              disableRipple
              style={{ backgroundColor: "transparent" }}
              variant="text"
              className="navbar__btn"
            >
              <Link className="link" to="/preguntasfrecuentes">Preguntas Frecuentes</Link>
            </Button>
          </li>
          <li>
            <Button
              disableRipple
              style={{ backgroundColor: "transparent" }}
              variant="text"
              className="navbar__btn"
            >
              <Link  className="link" to="/contacto">Contacto</Link>
            </Button>
          </li>
        </ul>  
      </Toolbar>
      <CartWidget className="carrito" />
    </AppBar>
  );
};

export default NavBar;

