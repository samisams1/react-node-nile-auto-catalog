"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("./services"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserController = {
    async getAllUsers(req, res) {
        try {
            const users = await services_1.default.getAllUsers();
            res.json(users);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    async getUserById(req, res) {
        try {
            const userId = req.params.id;
            const user = await services_1.default.getUserById(userId);
            if (user) {
                res.json(user);
            }
            else {
                res.status(404).json({ error: 'User not found' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    async createUser(req, res) {
        try {
            const userData = req.body;
            const hashedPassword = await bcrypt_1.default.hash(userData.password, 10);
            // Replace the plain text password with the hashed password
            userData.password = hashedPassword;
            const newUser = await services_1.default.createUser(userData);
            res.status(201).json(newUser);
        }
        catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    async updateUser(req, res) {
        try {
            const userId = req.params.id;
            const userData = req.body;
            const updatedUser = await services_1.default.updateUser(userId, userData);
            if (updatedUser) {
                res.json(updatedUser);
            }
            else {
                res.status(404).json({ error: 'User not found' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    /*async deleteUser(req: Request, res: Response) {
      try {
        const userId = req.params.id;
        const deletedUser = await UserService.deleteUser(userId);
        if (deletedUser) {
          res.json(deletedUser);
        } else {
          res.status(404).json({ error: 'User not found' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
    },*/
};
exports.default = UserController;
