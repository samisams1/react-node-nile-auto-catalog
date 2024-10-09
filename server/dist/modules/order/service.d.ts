import Order from './model';
declare const OrderService: {
    getAllOrders(): Promise<Order[]>;
    createOrder(orderData: Partial<Order>): Promise<Order>;
    getOrderById(orderId: string): Promise<Order | null>;
};
export default OrderService;
