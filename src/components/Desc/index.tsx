import React, { useCallback } from 'react'
import { Typography, Button, Grid } from '@material-ui/core'
import useCartStore from 'hooks/useCartStore'
import { useStyles } from './styles'

interface IProps {
  product: IProduct;
}

const DescriptionCart = ({ product }: IProps) => {
  const classes = useStyles()

  const { addItemToCart } = useCartStore()
  const item = { product, count: 1, id: product.id }

  const addToCart = useCallback(() => {
    addItemToCart(item)
  }, [item, addItemToCart])

  return (
    <Grid>
      <Grid container className={classes.wrap}>
        <Grid item xs={12}>
          <Typography variant='h4'>{product.name}</Typography>
          <Typography gutterBottom variant='h6'>
            ${product.price}
          </Typography>
          <Button
            variant='outlined'
            size='large'
            color='secondary'
            className={classes.margin}
            onClick={addToCart}
          >
            Add to cart
          </Button>
          <Typography className={classes.desc}>{product.description}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DescriptionCart
