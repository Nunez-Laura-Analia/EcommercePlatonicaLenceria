import ItemList from "../components/ItemList/ItemList"
import productos from "../MockProducts/MockProducts"

const Productos = () => {
    return(
        <div>
            <ItemList products={productos}/>
        </div>
    )
}

export default Productos