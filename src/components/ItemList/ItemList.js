//importacion react
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//importacion firebase
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../utils/firebaseConfig";
//importacion archivos
import Item from "../Item/Item";
//importacion librerias
import { Grid } from "@mui/material";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    setProducts([]);
    getProducts()
      .then((productos) => {
        category ? filterFirebase() : setProducts(productos);
      })
      .catch((err) => {});
  }, [category]);

  const getProducts = async () => {
    const productCollection = collection(db, "productos");
    const productSnapshot = await getDocs(productCollection);
    const productList = productSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product;
    });
    return productList;
  };

  const filterFirebase = async () => {
    const productRef = collection(db, "productos");
    const queryResult = query(productRef, where("category", "==", category));
    const querySnapshot = await getDocs(queryResult);
    const productList = querySnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product;
    });
    return setProducts(productList);
  };

  return (
    <>
      <Grid container spacing={5}>
        {products.map(({ title, price, image, stock, id, initial }) => {
          return (
            <Grid item md={3} key={id}>
              <Item
                title={title}
                price={price}
                image={image}
                stock={stock}
                initial={initial}
                id={id}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ItemList;
