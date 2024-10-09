"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("../model"));
const ProductRepository = {
    async getAllProducts() {
        return model_1.default.findAll();
    },
    async create(productData) {
        return model_1.default.create(productData);
    }
};
exports.default = ProductRepository;
