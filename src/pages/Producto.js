import productos from "../MockProducts/MockProducts";
import { useEffect, useState } from "react";
import ItemList from "../components/ItemList/ItemList";
import { useParams } from "react-router-dom";

const getProducts = () => {
  return new Promise((resolve, reject) => {
    resolve(productos);
  });
};

const Producto = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(
          category
            ? res.filter((product) => product.category === category)
            : res
        );
      })
      .catch((err) => {})
  }, [category]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default Producto;
