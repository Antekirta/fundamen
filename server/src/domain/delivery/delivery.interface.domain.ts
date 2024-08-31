export interface DeliveryAddressInterface {
  id: number;
  country_id: number;
  state_id: number;
  city_id: number;
  address: string;
  zip_code: string;
  contact_phone?: string;
}

export interface DeliveryAddressToAddInterface
  extends Omit<DeliveryAddressInterface, 'id'> {}

export interface DeliveryAddressToUserInterface {
  user_id: number;
  delivery_address_id: number;
}
