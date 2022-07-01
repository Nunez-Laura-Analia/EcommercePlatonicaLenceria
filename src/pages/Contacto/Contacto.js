//importacion css
import "./Contacto.css";
//importacion librerias
import TextField from "@mui/material/TextField";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import EmailIcon from "@mui/icons-material/Email";

const Contacto = () => {
  return (
    <div>
      <h3 className="titleContact">CONTÁCTO</h3>
      <div className="contactDivContainer">
        <div className="contactDiv">
          <AddLocationIcon className="iconContact" />
          <h5 className="contactTitle">DIRECCIÓN</h5>
          <p>Av. Siempre Viva 742</p>
        </div>
        <div className="contactDiv">
          <AddIcCallIcon className="iconContact" />
          <h5 className="contactTitle"> TELÉFONO</h5>
          <p>1122334455</p>
        </div>
        <div className="contactDiv">
          <EmailIcon className="iconContact" />
          <h5 className="contactTitle">EMAIL</h5>
          <p>platonicalenceria@gmail.com</p>
        </div>
      </div>
      <form className="divForm">
        <h3 className="titleForm">FORMULARIO DE CONTÁCTO</h3>
        <TextField className="form" label={"Nombre"} id="margin-none" />
        <TextField
          className="form"
          label={"Email"}
          id="margin-dense"
          margin="dense"
        />
        <TextField
          className="form"
          label={"Mensaje"}
          id="margin-normal"
          margin="normal"
        />
        <button className="selector selectorAdd" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
