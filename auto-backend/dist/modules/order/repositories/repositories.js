"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("../model"));
const OrderRepository = {
    async getAllOrders() {
        try {
            const orders = await model_1.default.findAll({});
            return orders;
        }
        catch (error) {
            console.error('Error retrieving orders:', error);
            throw error;
        }
    },
    async create(orderData) {
        return model_1.default.create(orderData);
    },
    async getorderById(orderId) {
        return model_1.default.findByPk(orderId);
    },
};
exports.default = OrderRepository;
