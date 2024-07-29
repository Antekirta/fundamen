export interface BasketInterface {
  id: number;
  user_id: number;
  created_date: string;
  total: number;
}

export interface ProductInBasketInterface {
  basket_id: number;
  product_id: number;
  quantity: number;
}

export interface BasketToAddInterface
  extends Omit<BasketInterface, 'id' | 'created_date' | 'total'> {}
