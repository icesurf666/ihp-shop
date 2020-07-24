import React from 'react'
import ProductList from '../../components/ProductList'
import teas from './fixtures'

const ShishaTeas: React.FC = () => (
  <div>
    <ProductList products={teas} />
  </div>
)

export default ShishaTeas
