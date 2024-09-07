import { Request, Response } from 'express';
import UserService from './services';
import bcrypt from 'bcrypt';

const UserController = {
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  async getUserById(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const user = await UserService.getUserById(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  async createUser(req: Request, res: Response) {
    try {
      const userData = req.body;
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      // Replace the plain text password with the hashed password
      userData.password = hashedPassword;
      const newUser = await UserService.createUser(userData);
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
async updateUser(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const userData = req.body;
      const updatedUser = await UserService.updateUser(userId, userData);
      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
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

export default UserController;