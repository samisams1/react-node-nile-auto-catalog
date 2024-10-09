
import  User  from './model';
import UserRepository from './repositories/UserRepository';

const UserService = {
  async getAllUsers(): Promise<User[]> {
    return UserRepository.getAllUsers();
  },

  async getUserById(userId: string): Promise<User | null> {
    return UserRepository.getUserById(userId);
  },

  async createUser(userData: Partial<User>): Promise<User> {
    return UserRepository.createUser(userData);
  },

  async updateUser(userId: string, userData: Partial<User>): Promise<User | null> {
    return UserRepository.updateUser(userId, userData);
  },

};

export default UserService;