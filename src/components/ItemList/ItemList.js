import Item from '../Item/Item';
import { Grid } from "@mui/material";

const ItemList = ({title, products}) => {
  return (
    <>
      <h2>{title}</h2>
      <Grid container spacing={5}>
        {  
          products.map( ({title, price, image, stock, id, initial}) => {
            return(
              <Grid item md={3} key={id}>
                <Item title={title} price={price} image={image} stock={stock} initial={initial}/>
              </Grid>
            )
          })
        }
      </Grid>
    </>
  )
};

export default ItemList


