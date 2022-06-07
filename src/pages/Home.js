import  productos from "../MockProducts/MockProducts"
import ItemList from "../components/ItemList/ItemList"

const Home = () => {
    return(
        <div>
            <ItemList products={productos}/>
        </div>
    )
}

export default Home