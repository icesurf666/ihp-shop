import { action, observable } from 'mobx'
import { persist } from 'mobx-persist'

class CartStore {
  @persist('object') @observable public cart: ICartItem[] = [];

  @action.bound
  addItem(item: ICartItem): void {
    this.cart = [...this.cart, item]
  }

  @action.bound
  updateItem(items: ICartItem[]): void {
    this.cart = items
  }

  @action.bound
  addItemToCart(item: ICartItem): void {
    const index = this.cart.findIndex(
      (cartItem) => item.id === cartItem.id,
    )
    if (index === -1) {
      this.addItem({ ...item, id: item.id })
    } else {
      this.cart[index].count += 1
      this.updateItem(this.cart)
    }
  }

  @action.bound
  updateCart(item: ICartItem): void {
    const updatedItems = this.cart.map((cartItem) => {
      if (cartItem.id === item.id) return { ...item, id: cartItem.id }
      return cartItem
    })
    this.updateItem(updatedItems)
  }

  @action.bound
  removeItemCart(item: ICartItem): void {
    const updatedCart = this.cart.filter(
      (cartItem) => item.id !== cartItem.id,
    )
    this.updateItem(updatedCart)
  }

  @action.bound
  removeItemCount(item: ICartItem) {
    const index = this.cart.findIndex(
      (cartItem) => item.id === cartItem.id,
    )
    if (index === -1) {
      this.addItem({ ...item, id: item.id })
    } else {
      if (this.cart[index].count <= 1) {
        return this.cart[index].count
      }
      this.cart[index].count -= 1
      this.updateItem(this.cart)
    }
  }

  @action.bound
  clear(): void {
    this.cart = []
  }
}

export default CartStore
