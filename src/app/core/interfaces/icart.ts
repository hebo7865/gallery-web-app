export interface Icart {
  id: number;
  userId: number;
  date: string;
  products: Product[];
  __v: number;
}

interface Product {
  productId: number;
  quantity: number;
}
