"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = __importDefault(require("./controllers"));
const controllers_2 = __importDefault(require("../subCategory/controllers"));
const router = express_1.default.Router();
router.get('/', controllers_1.default.getAllCategories);
//router.get('/:id', CategoryController.getCategryById);
router.get('/:name', controllers_2.default.getSubCategryIdByName);
router.post('/create', controllers_2.default.createSubCategory);
exports.default = router;
