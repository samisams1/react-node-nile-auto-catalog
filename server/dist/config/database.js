"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('nilesoft_autoepcrepair', 'postgres', 'samisams', {
    host: 'localhost',
    dialect: 'postgres',
    schema: 'autoepcrepair',
});
exports.default = sequelize;
