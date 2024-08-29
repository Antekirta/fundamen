enum TABLES {
  O = 'orders',
  PTO = 'products_to_order',
}

export const DB = {
  TABLES,
};

export const ROUTES = {
  ORDERS: {
    BASE: 'orders',
    ID: 'id',
  },
};

export const ORDER_STATUSES = {
  // Customer started the checkout process but did not complete it.
  // Incomplete orders are assigned a "Pending" status.
  PENDING: 'Pending',

  // Customer has completed the checkout process, but payment has yet to be confirmed.
  // Authorize-only transactions that are not yet captured have this status.
  AWAITING_PAYMENT: 'Awaiting Payment',

  // Customer has completed the checkout process and payment has been confirmed.
  AWAITING_FULFILLMENT: 'Awaiting Fulfillment',

  // Order has been pulled and packaged and is awaiting collection from a shipping provider.
  AWAITING_SHIPMENT: 'Awaiting Shipment',

  // Order has been packaged and is awaiting customer pickup from a seller-specified location.
  AWAITING_PICKUP: 'Awaiting Pickup',

  // Only some items in the order have been shipped.
  PARTIALLY_SHIPPED: 'Partially Shipped',

  // Order has been shipped/picked up, and receipt is confirmed;
  // client has paid for their digital product, and their file(s) are available for download.
  COMPLETED: 'Completed',

  // Order has been shipped, but receipt has not been confirmed;
  // seller has used the Ship Items action.
  // A listing of all orders with a "Shipped" status can be found under the More tab of the View Orders screen.
  SHIPPED: 'Shipped',

  // Seller has cancelled an order, due to a stock inconsistency or other reasons.
  // Stock levels will automatically update depending on your Inventory Settings.
  // Cancelling an order will not refund the order.
  // This status is triggered automatically when an order using an authorize-only payment gateway
  // is voided in the control panel before capturing payment.
  CANCELLED: 'Cancelled',

  // Seller has marked the order as declined.
  DECLINED: 'Declined',

  // Seller has used the Refund action to refund the whole order.
  // A listing of all orders with a "Refunded" status can be found under the More tab of the View Orders screen.
  REFUNDED: 'Refunded',

  // Customer has initiated a dispute resolution process for the transaction
  // that paid for the order or the seller has marked the order as a fraudulent order.
  DISPUTED: 'Disputed',

  // Order on hold while some aspect, such as tax-exempt documentation, is manually confirmed.
  // Orders with this status must be updated manually.
  // Capturing funds or other order actions will not automatically update the status of an order marked Manual Verification Required.
  MANUAL_VERIFICATION_REQUIRED: 'Manual Verification Required',

  // Seller has partially refunded the order.
  PARTIALLY_REFUNDED: 'Partially Refunded',
};
