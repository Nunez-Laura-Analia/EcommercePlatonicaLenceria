//importacion archivos
import ItemList from "../../components/ItemList/ItemList";

const Producto = () => {
  return (
    <div className="productsDivContainer">
      <img className="imgBannerProducts" src="../banner.4.jpeg" alt="banner" />
      <div className="productsDiv">
        <ItemList />
      </div>
    </div>
  );
};

export default Producto;
