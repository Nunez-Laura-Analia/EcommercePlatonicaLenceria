import productos from "../components/ItemListContainer/ItemListContainer"
import ItemList from "../components/ItemList/ItemList"

const Home = () => {
    return(
        <div>
            <ItemList products={productos}/>
        </div>
    )
}

export default Home