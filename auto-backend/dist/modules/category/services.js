"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = __importDefault(require("./repositories/repositories"));
const UserService = {
    async getAllCategories() {
        return repositories_1.default.getAllCategories();
    },
    async getCategryById(userId) {
        return repositories_1.default.getCategryById(userId);
    },
    /*async createUser(userData: Partial<User>): Promise<User> {
      return CategoryRepository.createUser(userData);
    },*/
    async updateUser(userId, userData) {
        return repositories_1.default.updateCategory(userId, userData);
    },
    async createCategory(categoryData) {
        return repositories_1.default.create(categoryData);
    }
};
exports.default = UserService;
