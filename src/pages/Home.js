import ItemList from "../components/ItemList/ItemList";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="divContainerPages">
        <div className="bannerDiv">
          <img className="imgBanner" src="./banner1.jpg" alt="banner" />
          <img className="imgBanner" src="./banner3.jpg" alt="banner" />
          <img className="imgBanner" src="./banner2.jpg" alt="banner" />
        </div>
        <div className="divListItem">
          <ItemList className="itemCss"/>
        </div>
      </div>
    </>
  );
};

export default Home;
