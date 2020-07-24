import React, { useCallback } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import useCartStore from 'hooks/useCartStore'
import { useStyles } from './styles'

interface IProps {
  product: IProduct;
}
const ProductCard: React.FC<IProps> = ({ product }) => {
  const classes = useStyles()
  const item = { product, count: 1, id: product.id }
  const { addItemToCart } = useCartStore()
  const addToCart = useCallback(() => {
    addItemToCart(item)
  }, [addItemToCart, item])

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/${product.type}/${product.id}`}>
        <CardMedia
          component='img'
          height='250'
          className={classes.img}
          image={process.env.PUBLIC_URL + product.src[0]}
        />
        <CardContent className={classes.cardAction}>
          <Typography gutterBottom variant='h6' component='h2' className={classes.title}>
            {product.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p' className={classes.desc}>
            {`${product.subtitle.slice(0, 100)}...`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.card}>
        <Typography>${product.price}</Typography>
        <Button onClick={addToCart} size='small' color='secondary'>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
