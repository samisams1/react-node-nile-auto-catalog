import { Request, Response } from 'express';
import OrderService from './service';
import Order from './model';
const OrderController = {
  async getAllOrders(req: Request, res: Response) {
    try {
      const orders = await OrderService.getAllOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  async  getOrderById(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const order = await OrderService.getOrderById(orderId);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  async createOrder(req: Request, res: Response): Promise<Response> {
    try {
      const orderData: Order[] = req.body;
  
      const createdOrders = await Promise.all(
        orderData.map(async (data) => {
          const createdOrder = await OrderService.createOrder(data);
          return createdOrder;
        })
      );
  
      return res.status(201).json(createdOrders);
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
  
      return res.status(500).json({ error: 'Failed to create Orders' });
    }
  }

};

export default OrderController;