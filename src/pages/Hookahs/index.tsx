import React from 'react'
import ProductList from '../../components/ProductList'
import hookahs from './fixtures'

const Hookahs: React.FC = () => (
  <div>
    <ProductList products={hookahs} />
  </div>
)

export default Hookahs
