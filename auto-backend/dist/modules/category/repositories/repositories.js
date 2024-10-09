"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("../../product/model"));
const model_2 = __importDefault(require("../../subCategory/model"));
const model_3 = __importDefault(require("../model"));
const CategoryRepository = {
    async getAllCategories() {
        try {
            const categories = await model_3.default.findAll({
                include: [
                    {
                        model: model_2.default,
                        as: 'subcategories',
                        include: [
                            {
                                model: model_1.default,
                                as: 'products'
                            }
                        ]
                    }
                ]
            });
            return categories;
        }
        catch (error) {
            console.error('Error retrieving categories:', error);
            throw error;
        }
    },
    async getCategryById(categoryId) {
        return model_3.default.findByPk(categoryId);
    },
    async create(categoryData) {
        return model_3.default.create(categoryData);
    },
    /*async createCategory(categoryData: Partial<Category>): Promise<Category> {
      return Category.create(categoryData);
    },*/
    async updateCategory(categoryId, categoryData) {
        const user = await model_3.default.findByPk(categoryId);
        if (user) {
            await user.update(categoryData);
            return user;
        }
        return null;
    },
    async deleteCategory(categoryId) {
        const user = await model_3.default.findByPk(categoryId);
        if (user) {
            await user.destroy();
            return user;
        }
        return null;
    },
};
exports.default = CategoryRepository;
