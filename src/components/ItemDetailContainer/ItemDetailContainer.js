//importacion react
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//importacion firebase
import { doc, getDoc } from "firebase/firestore";
import db from "../../utils/firebaseConfig";
//importacion archivos
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct().then((prod) => {
      setProduct(prod);
    });
  }, [id]);

  const getProduct = async () => {
    const docRef = doc(db, "productos", id);
    const docSnaptshop = await getDoc(docRef);
    let product = docSnaptshop.data();
    product.id = docSnaptshop.id;
    return product;
  };

  return (
    <>
      <ItemDetail data={product} />
    </>
  );
};

export default ItemDetailContainer;