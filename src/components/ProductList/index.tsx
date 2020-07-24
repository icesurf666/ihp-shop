import React from 'react'
import ProductCard from './components/ProductCard'
import { useStyles } from './styles'

interface IProps {
  products: IProduct[];
}

const ProductList: React.FC<IProps> = ({ products }) => {
  const classes = useStyles()
  return (
    <div className={classes.list}>
      {products.map((item: IProduct) => (
        <ProductCard product={item} key={item.id} />
      ))}
    </div>
  )
}

export default ProductList
