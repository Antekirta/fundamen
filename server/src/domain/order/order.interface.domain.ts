import { ORDER_STATUSES } from './order.registry.domain';

export interface OrderInterface {
  id: number;
  user_id: number;
  created_date: string;
  status: string;
  total: number;
}

export interface OrderToAddInterface
  extends Omit<OrderInterface, 'id' | 'created_date'> {}

export type OrderStatus = (typeof ORDER_STATUSES)[keyof typeof ORDER_STATUSES];
