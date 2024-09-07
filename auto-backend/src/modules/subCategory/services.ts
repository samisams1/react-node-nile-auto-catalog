
import  Category  from './model';
import  SubCategory  from '../subCategory/model';
import CategoryRepository from './repositories/repositories';
import ServiceRepository from '../subCategory/repositories/repositories';

const UserService = {
  async getAllCategories(): Promise<Category[]> {
    return CategoryRepository.getAllCategories();
  },

  async getCategryById(categoryId: string): Promise<Category | null> {
    return CategoryRepository.getCategryById(categoryId);
  },
  async getSubCategryIdByName(name: string): Promise<SubCategory | null> {
    return ServiceRepository.getSubCategryIdByName(name);
  },
  async createSubCategory(subCategoryData: Partial<SubCategory>): Promise<SubCategory> {
    return ServiceRepository.create(subCategoryData);
  },
  async getSubCategryById(categoryId: string): Promise<Category | null> {
    return CategoryRepository.getCategryById(categoryId);
  },

  /*async createUser(userData: Partial<User>): Promise<User> {
    return CategoryRepository.createUser(userData);
  },*/

  async updateUser(userId: string, userData: Partial<Category>): Promise<Category | null> {
    return CategoryRepository.updateCategory(userId, userData);
  },

};

export default UserService;