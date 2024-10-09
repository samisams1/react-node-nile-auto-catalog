"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const model_1 = __importDefault(require("../product/model"));
const database_1 = __importDefault(require("../../config/database"));
class Subcategory extends sequelize_1.Model {
}
Subcategory.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    categoryId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    sequelize: database_1.default,
    modelName: 'Subcategory',
    tableName: 'subcategories',
    timestamps: true,
    schema: 'autoepcrepair',
});
// Define the association between Subcategory and Product
Subcategory.hasMany(model_1.default, {
    as: 'products',
    foreignKey: 'subcategoryId', // Replace with the actual column name in your Subcategory model
});
exports.default = Subcategory;
