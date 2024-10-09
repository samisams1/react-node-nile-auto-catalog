import Product from '../../product/model';
import Subcategory from '../model';
import Category  from '../model';

const CategoryRepository = {
  async getAllCategories(): Promise<Category[]> {
    return Category.findAll();
  },

  async getCategryById(categoryId: string): Promise<Category | null> {
    return Category.findByPk(categoryId);
  },
  async create(subCategoryData: Partial<Subcategory>): Promise<Subcategory> {
    return Subcategory.create(subCategoryData);
  },
  async getSubCategryIdByName(name: string): Promise<Subcategory | null> {
    try {
      const originalName = name
      .split('-')
      .map(word => word.toLowerCase())
      .join(' ');
      const subcategory = await Subcategory.findOne({
        where: { name:originalName },
        include: [
          {
            model: Product ,
            as: 'products',
          }
        ]
      });
      return subcategory || null;
    } catch (error) {
      console.error('Error fetching subcategory:', error);
      return null;
    }
  },
  /*async createCategory(categoryData: Partial<Category>): Promise<Category> {
    return Category.create(categoryData);
  },*/
  async updateCategory(categoryId: string, categoryData: Partial<Category>): Promise<Category | null> {
    const user = await Category.findByPk(categoryId);
    if (user) {
      await user.update(categoryData);
      return user;
    }
    return null;
  },

  async deleteCategory(categoryId: string): Promise<Category | null> {
    const user = await Category.findByPk(categoryId);
    if (user) {
      await user.destroy();
      return user;
    }
    return null;
  },
};

export default CategoryRepository;