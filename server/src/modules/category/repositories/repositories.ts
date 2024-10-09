import Product from '../../product/model';
import Subcategory from '../../subCategory/model';
import Category  from '../model';

const CategoryRepository = {
    async getAllCategories(): Promise<Category[]> {
        try {
          const categories = await Category.findAll({
            include: [
              {
                model: Subcategory ,
                as: 'subcategories',
                include: [
                    {
                      model: Product,
                      as: 'products'
                    }
                  ]
              }
            ]
          });
          return categories;
        } catch (error) {
          console.error('Error retrieving categories:', error);
          throw error;
        }
      },
  async getCategryById(categoryId: string): Promise<Category | null> {
    return Category.findByPk(categoryId);
  },
  async create(categoryData: Partial<Category>): Promise<Category> {
    return Category.create(categoryData);
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