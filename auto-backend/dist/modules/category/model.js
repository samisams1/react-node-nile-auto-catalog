"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const model_1 = __importDefault(require("../subCategory/model"));
const database_1 = __importDefault(require("../../config/database"));
class Category extends sequelize_1.Model {
}
Category.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: database_1.default,
    modelName: 'Category',
    tableName: 'categories',
    timestamps: true,
    schema: 'autoepcrepair',
});
Category.hasMany(model_1.default, {
    as: 'subcategories',
    foreignKey: 'categoryId', // Replace with the actual column name in your Subcategory model
});
exports.default = Category;
