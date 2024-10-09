"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("../model"));
const UserRepository = {
    async getAllUsers() {
        return model_1.default.findAll();
    },
    async getUserById(userId) {
        return model_1.default.findByPk(userId);
    },
    async createUser(userData) {
        return model_1.default.create(userData);
    },
    async updateUser(userId, userData) {
        const user = await model_1.default.findByPk(userId);
        if (user) {
            await user.update(userData);
            return user;
        }
        return null;
    },
    async deleteUser(userId) {
        const user = await model_1.default.findByPk(userId);
        if (user) {
            await user.destroy();
            return user;
        }
        return null;
    },
};
exports.default = UserRepository;
