import Category from './model';
declare const UserService: {
    getAllCategories(): Promise<Category[]>;
    getCategryById(userId: string): Promise<Category | null>;
    updateUser(userId: string, userData: Partial<Category>): Promise<Category | null>;
    createCategory(categoryData: Partial<Category>): Promise<Category>;
};
export default UserService;
