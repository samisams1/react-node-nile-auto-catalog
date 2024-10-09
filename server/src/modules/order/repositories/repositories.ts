import Product from '../../product/model';
import Order  from '../model';
const OrderRepository = {
    async getAllOrders(): Promise<Order[]> {
        try {
          const orders = await Order.findAll({});
          return orders;
        } catch (error) {
          console.error('Error retrieving orders:', error);
          throw error;
        }
      },
    async create(orderData: Partial<Order>): Promise<Order> {
        return Order.create(orderData);
      },
    async getorderById(orderId: string): Promise<Order | null> {
        return Order.findByPk(orderId);
      }, 
    
};
export default OrderRepository;