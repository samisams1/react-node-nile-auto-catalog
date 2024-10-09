import { Request, Response } from 'express';
declare const OrderController: {
    getAllOrders(req: Request, res: Response): Promise<void>;
    getOrderById(req: Request, res: Response): Promise<void>;
    createOrder(req: Request, res: Response): Promise<Response>;
};
export default OrderController;
