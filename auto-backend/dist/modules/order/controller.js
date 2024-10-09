"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("./service"));
const OrderController = {
    async getAllOrders(req, res) {
        try {
            const orders = await service_1.default.getAllOrders();
            res.json(orders);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    async getOrderById(req, res) {
        try {
            const { orderId } = req.params;
            const order = await service_1.default.getOrderById(orderId);
            res.json(order);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    async createOrder(req, res) {
        try {
            const orderData = req.body;
            const createdOrders = await Promise.all(orderData.map(async (data) => {
                const createdOrder = await service_1.default.createOrder(data);
                return createdOrder;
            }));
            return res.status(201).json(createdOrders);
        }
        catch (error) {
            console.error(error); // Log the error for debugging purposes
            return res.status(500).json({ error: 'Failed to create Orders' });
        }
    }
};
exports.default = OrderController;
