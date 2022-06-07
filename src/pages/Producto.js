import  productos from "../MockProducts/MockProducts"
import { useEffect, useState } from "react"
import ItemList from "../components/ItemList/ItemList"
import { useParams } from "react-router-dom"
import Loader from "../components/Loader/Loader"

const Producto = () => {
    const [products , setProducts] = useState ([])
    const { category } = useParams()
    const [loader, setLoader] = useState (false)

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            resolve(productos);
        });
    };   
    
    useEffect ( () => {
        setLoader(true);
        getProducts()
        .then ((res) => {
            setProducts( category ? res.filter(product => product.category === category)  : res)
        })
        .catch ( (err) => {
        })
        .finally( () =>{
        setLoader(false)
        })
    }, [category])    
    
    return(
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default Producto