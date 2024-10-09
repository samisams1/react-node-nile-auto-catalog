import { Request, Response } from 'express';
import CategoryService from './services';
import SubCategoryService from '../subCategory/services';
const CategoryController = {
  async getAllCategories(req: Request, res: Response) {
    try {
      const categories = await CategoryService.getAllCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  async getSubCategryIdByName(req: Request, res: Response) {
    try { 
      const name = req.params.name.toLocaleLowerCase();
      const category = await SubCategoryService.getSubCategryIdByName(name);
      if (category) {
        res.json(category);
      } else {
        res.status(404).json({ error: 'Sub category not found' });
      }
     } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  async createSubCategory(req: Request, res: Response): Promise<Response> {
    try {
      const { name, categoryId, type, language, region, date, price } = req.body;
      const categoryIdNumber = parseInt(categoryId, 10);
      const priceNumber = parseFloat(price);
    // Create a new product instance
    const subCategoryData = {
      name, 
      categoryId:categoryIdNumber,
       type,
        language,
         region,
          date,
           price:priceNumber
          };
          console.log(subCategoryData)
    // Create the product
    const createdSubCategory = await SubCategoryService.createSubCategory(subCategoryData);
  return res.status(201).json(createdSubCategory);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to  create sub category' });
    }
  },
  /*async createUser(req: Request, res: Response) {
    try {
      const userData = req.body;
      const newUser = await CategoryService.(userData);
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },*/
/*async updateUser(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const userData = req.body;
      const updatedUser = await CategoryService.updateUser(userId, userData);
      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },*/

};

export default CategoryController;