"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = __importDefault(require("./repositories/repositories"));
const repositories_2 = __importDefault(require("../subCategory/repositories/repositories"));
const UserService = {
    async getAllCategories() {
        return repositories_1.default.getAllCategories();
    },
    async getCategryById(categoryId) {
        return repositories_1.default.getCategryById(categoryId);
    },
    async getSubCategryIdByName(name) {
        return repositories_2.default.getSubCategryIdByName(name);
    },
    async createSubCategory(subCategoryData) {
        return repositories_2.default.create(subCategoryData);
    },
    async getSubCategryById(categoryId) {
        return repositories_1.default.getCategryById(categoryId);
    },
    /*async createUser(userData: Partial<User>): Promise<User> {
      return CategoryRepository.createUser(userData);
    },*/
    async updateUser(userId, userData) {
        return repositories_1.default.updateCategory(userId, userData);
    },
};
exports.default = UserService;
