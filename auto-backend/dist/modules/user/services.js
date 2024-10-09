"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = __importDefault(require("./repositories/UserRepository"));
const UserService = {
    async getAllUsers() {
        return UserRepository_1.default.getAllUsers();
    },
    async getUserById(userId) {
        return UserRepository_1.default.getUserById(userId);
    },
    async createUser(userData) {
        return UserRepository_1.default.createUser(userData);
    },
    async updateUser(userId, userData) {
        return UserRepository_1.default.updateUser(userId, userData);
    },
};
exports.default = UserService;
