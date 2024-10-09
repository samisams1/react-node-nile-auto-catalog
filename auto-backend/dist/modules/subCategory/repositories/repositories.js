"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("../../product/model"));
const model_2 = __importDefault(require("../model"));
const model_3 = __importDefault(require("../model"));
const CategoryRepository = {
    async getAllCategories() {
        return model_3.default.findAll();
    },
    async getCategryById(categoryId) {
        return model_3.default.findByPk(categoryId);
    },
    async create(subCategoryData) {
        return model_2.default.create(subCategoryData);
    },
    async getSubCategryIdByName(name) {
        try {
            const originalName = name
                .split('-')
                .map(word => word.toLowerCase())
                .join(' ');
            const subcategory = await model_2.default.findOne({
                where: { name: originalName },
                include: [
                    {
                        model: model_1.default,
                        as: 'products',
                    }
                ]
            });
            return subcategory || null;
        }
        catch (error) {
            console.error('Error fetching subcategory:', error);
            return null;
        }
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
