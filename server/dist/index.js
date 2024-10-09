"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors")); // Import the cors package
const routes_1 = __importDefault(require("./modules/user/routes"));
const routes_2 = __importDefault(require("./modules/auth/routes"));
const routes_3 = __importDefault(require("./modules/category/routes"));
const routes_4 = __importDefault(require("./modules/subCategory/routes"));
const routes_5 = __importDefault(require("./modules/product/routes"));
const routes_6 = __importDefault(require("./modules/order/routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Enable CORS middleware
app.use((0, cors_1.default)());
app.use(express_1.default.static('uploads'));
// Register routes
app.use('/users', routes_1.default);
app.use('/auth', routes_2.default);
app.use('/category', routes_3.default);
app.use('/subCategory', routes_4.default);
app.use('/product', routes_5.default);
app.use('/orders', routes_6.default);
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
});
app.listen(4000, () => {
    console.log('Server started on port 4000');
});
