export interface PaymentMethodInterface {
  id: number;
  name: string;
}

export interface PaymentMethodToAddInterface
  extends Omit<PaymentMethodInterface, 'id'> {}

export interface PaymentMethodToOrderInterface {
  order_id: number;
  payment_method_id: number;
}

export interface PaymentMethodToUserInterface {
  user_id: number;
  payment_method_id: number;
}
