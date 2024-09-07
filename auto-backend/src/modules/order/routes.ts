import express from 'express';
import OrderController from './controller';

const router = express.Router();

router.get('/', OrderController.getAllOrders);
router.get('/:orderId', OrderController.getOrderById);
router.post('/createOrder', OrderController.createOrder);

export default router;