import React from 'react'
import bowls from './fixtures'
import { ProductList } from 'components'

const Bowls: React.FC = () => (
  <div>
    <ProductList products={bowls} />
  </div>
)

export default Bowls
