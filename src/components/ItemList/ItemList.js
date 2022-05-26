import { useState, useEffect } from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const ItemList = () => {
  const [loader, setLoader] = useState(false);
  const [products, setProducts] = useState([]);

  const productos = [
    {
      title: "Colaless Glitter",
      price: 1000,
      image: "./colaless-glitter.jpeg",
      description: "descripcion",
      stock: 9,
      initial: 5,
      id: 1,
    },
    {
      title: "Colaless Glitter 2",
      price: 1500,
      image: "./colaless-glitter-regulables.jpeg",
      description: "descripcion",
      stock: 6,
      initial: 2,
      id: 2,
    },
    {
      title: "Vendetinas",
      price: 1200,
      image: "./vedetinas.jpeg",
      description: "descripcion",
      stock: 7,
      initial: 1,
      id: 3,
    },
    {
      title: "Vedetinas",
      price: 900,
      image: "./vedetinas2.jpeg",
      description: "descripcion",
      stock: 8,
      initial: 3,
      id: 4,
    },
  ];

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };

  useEffect(() => {
    setLoader(true);
    getProducts()
      .then((res) => {
        console.log("then", res);
        setProducts(res);
      })
      .catch((err) => {})
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <div className="container-card">
      <ItemListContainer
        title={"Productos Recomendados"}
        products={productos}
      />
    </div>
  );
};


const producto = {
  title: "COLALESS",
  id: 5,
  material: "ALGODON Y LYCRA",
  price: 1890 ,
  colores : "BLANCO, NEGRO, ROJO, ROSA, AZUL Y GRIS",
  image: "./colaless-glitter-regulables.jpeg",
  description: "Sus breteles laterales regulables, la convierten en una prenda versatil y super adaptable al cuerpo.",
  generalDescription: "El precio publicado corresponde a una docena",
  stock: 9,
  initial: 5,

};

export default ItemList;
export { producto };
