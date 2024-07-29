export interface OrderInterface {
  id: number;
  user_id: number;
  created_date: string;
  status: string;
  total: number;
}

export interface OrderToAddInterface
  extends Omit<OrderInterface, 'id' | 'created_date'> {}
