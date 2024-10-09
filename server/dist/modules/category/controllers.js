"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("./services"));
const CategoryController = {
    async getAllCategories(req, res) {
        try {
            const categories = await services_1.default.getAllCategories();
            res.json(categories);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    async createCategory(req, res) {
        try {
            const { name } = req.body;
            // Create a new product instance
            const productData = {
                name,
            };
            // Create the product
            const createdProduct = await services_1.default.createCategory(productData);
            return res.status(201).json(createdProduct);
        }
        catch (error) {
            return res.status(500).json({ error: 'Failed to v create product' });
        }
    },
};
exports.default = CategoryController;
