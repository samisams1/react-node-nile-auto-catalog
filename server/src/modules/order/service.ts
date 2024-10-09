
import  Order  from './model';
import OrderRepository from './repositories/repositories';

const OrderService = {
  async getAllOrders(): Promise<Order[]> {
    return OrderRepository.getAllOrders();
  },
  async createOrder(orderData: Partial<Order>): Promise<Order> {
    return OrderRepository.create(orderData);
  },
  async getOrderById(orderId: string): Promise<Order | null> {
    return OrderRepository.getorderById(orderId);
  },
/*
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
  async updateUser(userId: string, userData: Partial<Category>): Promise<Category | null> {
    return CategoryRepository.updateCategory(userId, userData);
  },
*/
    /*async createUser(userData: Partial<User>): Promise<User> {
    return CategoryRepository.createUser(userData);
  },*/

};

export default OrderService;