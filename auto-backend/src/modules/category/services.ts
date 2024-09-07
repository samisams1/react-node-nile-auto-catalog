
import  Category  from './model';
import CategoryRepository from './repositories/repositories';

const UserService = {
  async getAllCategories(): Promise<Category[]> {
    return CategoryRepository.getAllCategories();
  },

  async getCategryById(userId: string): Promise<Category | null> {
    return CategoryRepository.getCategryById(userId);
  },

  /*async createUser(userData: Partial<User>): Promise<User> {
    return CategoryRepository.createUser(userData);
  },*/

  async updateUser(userId: string, userData: Partial<Category>): Promise<Category | null> {
    return CategoryRepository.updateCategory(userId, userData);
  },
  async createCategory(categoryData: Partial<Category>): Promise<Category> {
    return CategoryRepository.create(categoryData);
  }
};

export default UserService;