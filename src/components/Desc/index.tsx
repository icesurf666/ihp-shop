import React, { useCallback } from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import useCartStore from "hooks/useCartStore";
import { useStyles } from "./styles";

interface IProps {
  product: IProduct;
}

const DescriptionCart = ({ product }: IProps) => {
  const classes = useStyles();

  const item = { product, count: 1, id: product.id }
  const { addItemToCart } = useCartStore()

  const addToCart = useCallback(() => {
    addItemToCart(item);
  }, [])

  return (
    <Grid>
      <Grid container className={classes.wrap}>
        <Grid item xs={12}>
          <Typography variant="h4">{product.name}</Typography>
          <Typography gutterBottom variant="h6">
            ${product.price}
          </Typography>
        <Button
          variant="outlined"
          size="large"
          color="secondary"
          className={classes.margin}
          onClick={addToCart}
        >
          {false ? "Add again" : "Add to cart"}
        </Button>
        <Typography className={classes.desc}>{product.description}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DescriptionCart;
