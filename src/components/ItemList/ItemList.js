import Item from "../Item/Item";
import { Grid } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import db from "../../utils/firebaseConfig";
import { useEffect } from "react";

const ItemList = ({ title, products }) => {

  useEffect(() => {
    getProducts()
    .then ((productos) => {
      console.log("productos", productos)
    })
  }, []);

  const getProducts = async () => {
    const productSnapshot = await getDocs(collection(db, "productos"));
    const productList = productSnapshot.docs.map((doc) => {
      let product = doc.data()
      product.id = doc.id
      return product
    })
    return productList
  };

  return (
    <>
      <h2>{title}</h2>
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
 