"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = __importDefault(require("./controllers"));
const router = express_1.default.Router();
router.get('/', controllers_1.default.getAllUsers);
router.get('/:id', controllers_1.default.getUserById);
router.post('/create', controllers_1.default.createUser);
router.put('/:id', controllers_1.default.updateUser);
//router.delete('/:id', UserController.deleteUser);
exports.default = router;
