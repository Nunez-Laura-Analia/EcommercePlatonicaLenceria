//importacion archivos
import ItemList from "../../components/ItemList/ItemList"
//importacion css
import './Productos.css'

const Productos = () => {
    return(
        <div className="productsDivContainer">
            <img className="imgBannerProducts" src="./banner.4.jpeg" alt="banner"/>
            <div className="productsDiv">
               <ItemList /> 
            </div>   
        </div>
    )
}

export default Productos