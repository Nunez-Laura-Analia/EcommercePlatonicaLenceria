import "./ItemDetail.css";


const ItemDetail = ({ data }) => {
  console.log("data", data);
  return (
    <>
      <div className="itemDetail">
        <div className="imgContainer">
          <img className="imgDetail" src={data.image} />
        </div>
        <div className="infoDetail">
          <h2>{data.title}</h2>
          <p>MATERIAL: {data.material}</p>
          <h4>$ {data.price}</h4>
          <p>{data.generalDescription}</p>
          <div className="selectorContainer">
            <select className="selector" >
              <option>CANTIDAD</option>
              <option>1/2 DOCENA</option>
              <option>1 DOCENA</option>
            </select>
            <input className="selector" type="number" value="1"></input>
            <button className="selectorAdd selector">AÑADIR AL CARRITO</button>
          </div>

          <div className="color-group-selector">
            <button className="color-selector black"></button>
            <button className="color-selector white"></button>
            <button className="color-selector red"></button>
            <button className="color-selector pink"></button>
            <button className="color-selector blue"></button>
            <button className="color-selector grey"></button>
          </div>
          <p className="detailColors">{data.colores}</p>
          <p className="detailDescription">{data.description}</p>
          <p>Compartir</p>
          
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
