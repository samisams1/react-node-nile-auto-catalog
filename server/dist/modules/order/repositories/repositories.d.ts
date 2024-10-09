import Order from '../model';
declare const OrderRepository: {
    getAllOrders(): Promise<Order[]>;
    create(orderData: Partial<Order>): Promise<Order>;
    getorderById(orderId: string): Promise<Order | null>;
};
export default OrderRepository;
