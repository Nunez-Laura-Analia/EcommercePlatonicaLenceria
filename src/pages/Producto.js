import productos from "../components/ItemListContainer/ItemListContainer"
import { useEffect, useState } from "react"
import ItemList from "../components/ItemList/ItemList"
import { useParams } from "react-router-dom"

const Producto = () => {
    const [products , setProducts] = useState ([])
    const { category } = useParams()

    useEffect ( () => {
        setProducts([])
        console.log("category", category)
        getProducts()
        .then ((res) => {
            filterByCategory(res)
        })
    }, [category])    

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            resolve(productos);
        });
    };    
    
    const filterByCategory = (array) => {
        return array.map ((item) => {
            if (item.category == category) {
                return setProducts(products => [...products, item])
            } 
        })
    }
    return(
        <div>
            <ItemList title={"Productos Recomendados"} products={products}/>
        </div>
    )
}

export default Producto