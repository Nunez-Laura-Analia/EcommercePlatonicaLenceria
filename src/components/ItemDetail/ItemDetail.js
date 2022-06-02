import "./ItemDetail.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import DiamondIcon from '@mui/icons-material/Diamond';


const ItemDetail = ({ data }) => {
  return (
    <>
      <div className="itemDetail">
        <div className="imgContainer">
          <img className="imgDetail" src={`/${data.image}`} />
        </div>
        <div className="infoDetail">
          <h2>{data.title}</h2>
          <p>MATERIAL: {data.material} </p>
          <p>{data.materialAdicional}<DiamondIcon/></p>
          <h4>$ {data.price}</h4>
          <p className="talle">Talle disponible {data.talle}</p>
          <div>
            <button className="talleSelector">U</button>
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
            <select className="selector">
              <option>Cantidad</option>
              <option>1/2 Docena</option>
              <option>1 Docena</option>
            </select>
            <input className="selector" type="number" value="1"></input>
            <button className="selectorAdd selector">Agregar al carrito</button>
          </div>
          <p className="detailDescription">{data.description}</p>
          <p className="detailDescription">{data.generalDescription}</p>
          <p>
          </p>
          <p>Compartir</p>
          <div className="redes">
            <WhatsAppIcon className="redesLogo"/>
            <InstagramIcon className="redesLogo"/>
            <FacebookIcon className="redesLogo"/>
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
