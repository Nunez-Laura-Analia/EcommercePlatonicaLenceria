//importacion react
import { Link } from "react-router-dom";
//importacion archivos
import ItemList from "../../components/ItemList/ItemList";
//importacion css
import "./Home.css";


const Home = () => {
  return (
    <>
      <div className="divContainerPages">
        <div >
          <Link className="bannerDiv" to="product">
            <img className="imgBanner" src="./banner1.jpg" alt="banner" />
            <img className="imgBanner" src="./banner3.jpg" alt="banner" />
            <img className="imgBanner" src="./banner2.jpg" alt="banner" />
          </Link>
        </div>
        <div className="divListItem">
          <ItemList className="itemCss" />
        </div>
      </div>
    </>
  );
};

export default Home;
