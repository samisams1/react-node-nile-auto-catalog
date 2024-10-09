import Subcategory from '../model';
import Category from '../model';
declare const CategoryRepository: {
    getAllCategories(): Promise<Category[]>;
    getCategryById(categoryId: string): Promise<Category | null>;
    create(subCategoryData: Partial<Subcategory>): Promise<Subcategory>;
    getSubCategryIdByName(name: string): Promise<Subcategory | null>;
    updateCategory(categoryId: string, categoryData: Partial<Category>): Promise<Category | null>;
    deleteCategory(categoryId: string): Promise<Category | null>;
};
export default CategoryRepository;
