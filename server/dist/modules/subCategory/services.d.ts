import Category from './model';
import SubCategory from '../subCategory/model';
declare const UserService: {
    getAllCategories(): Promise<Category[]>;
    getCategryById(categoryId: string): Promise<Category | null>;
    getSubCategryIdByName(name: string): Promise<SubCategory | null>;
    createSubCategory(subCategoryData: Partial<SubCategory>): Promise<SubCategory>;
    getSubCategryById(categoryId: string): Promise<Category | null>;
    updateUser(userId: string, userData: Partial<Category>): Promise<Category | null>;
};
export default UserService;
