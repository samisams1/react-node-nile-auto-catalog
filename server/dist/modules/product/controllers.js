"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("./services"));
const ProductController = {
    async getAllProducts(req, res) {
        try {
            const products = await services_1.default.getAllProducts();
            res.json(products);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    async createProduct(req, res) {
        try {
            const { name, subcategoryId, type, language, region, date, price, description } = req.body;
            // Get the uploaded image file
            const imageurl = req.file;
            console.log(imageurl);
            // Create a new product instance
            const productData = {
                name,
                subcategoryId,
                type,
                language,
                region,
                date,
                price,
                description,
                imageurl: imageurl ? imageurl.filename : undefined,
            };
            console.log(productData);
            // Create the product
            const createdProduct = await services_1.default.createProduct(productData);
            return res.status(201).json(createdProduct);
        }
        catch (error) {
            console.error(error); // Log the error message to the console
            return res.status(500).json({ error: 'Failed to create product' });
        }
    },
};
exports.default = ProductController;
