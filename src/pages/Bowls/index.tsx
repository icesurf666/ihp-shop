import React from 'react'
import { ProductList } from 'components'
import bowls from './fixtures'

const Bowls: React.FC = () => (
  <div>
    <ProductList products={bowls} />
  </div>
)

export default Bowls
