import { create } from 'mobx-persist'
import CartStore from './cart'

const hydrate = create({
  storage: localStorage,
  jsonify: true,
})

class RootStore {
  public cart: CartStore

  constructor() {
    this.cart = new CartStore()

    Promise.all([
      hydrate('cart', this.cart),
    ])
  }
}

export default RootStore
