"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = __importDefault(require("./repositories/repositories"));
const ProductService = {
    async getAllProducts() {
        return repositories_1.default.getAllProducts();
    },
    async createProduct(productData) {
        return repositories_1.default.create(productData);
    },
};
exports.default = ProductService;
