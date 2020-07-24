import AppContext from 'context/appContext'
import { useContext } from 'react'
import CartStore from 'store/cart'

const useCartStore = (): CartStore => {
  const { cart } = useContext(AppContext)

  return cart
}

export default useCartStore
