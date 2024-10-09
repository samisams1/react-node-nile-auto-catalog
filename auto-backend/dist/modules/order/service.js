"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = __importDefault(require("./repositories/repositories"));
const OrderService = {
    async getAllOrders() {
        return repositories_1.default.getAllOrders();
    },
    async createOrder(orderData) {
        return repositories_1.default.create(orderData);
    },
    async getOrderById(orderId) {
        return repositories_1.default.getorderById(orderId);
    },
    /*
      async getCategryById(categoryId: string): Promise<Category | null> {
        return CategoryRepository.getCategryById(categoryId);
      },
      async getSubCategryIdByName(name: string): Promise<SubCategory | null> {
        return ServiceRepository.getSubCategryIdByName(name);
      },
      async createSubCategory(subCategoryData: Partial<SubCategory>): Promise<SubCategory> {
        return ServiceRepository.create(subCategoryData);
      },
      async getSubCategryById(categoryId: string): Promise<Category | null> {
        return CategoryRepository.getCategryById(categoryId);
      },
      async updateUser(userId: string, userData: Partial<Category>): Promise<Category | null> {
        return CategoryRepository.updateCategory(userId, userData);
      },
    */
    /*async createUser(userData: Partial<User>): Promise<User> {
    return CategoryRepository.createUser(userData);
  },*/
};
exports.default = OrderService;
