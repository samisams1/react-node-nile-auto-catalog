import Category from '../model';
declare const CategoryRepository: {
    getAllCategories(): Promise<Category[]>;
    getCategryById(categoryId: string): Promise<Category | null>;
    create(categoryData: Partial<Category>): Promise<Category>;
    updateCategory(categoryId: string, categoryData: Partial<Category>): Promise<Category | null>;
    deleteCategory(categoryId: string): Promise<Category | null>;
};
export default CategoryRepository;
