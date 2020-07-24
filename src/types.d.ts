declare interface IProduct {
  id: number;
  name: string;
  type: string;
  subtitle: string;
  description: string;
  src: Array<string>;
  price: number;
}

declare interface ICartItem {
  id: number;
  product: IProduct;
  count: number;
}
