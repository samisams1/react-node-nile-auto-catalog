import { Request, Response } from 'express';
import CategoryService from './services';

const CategoryController = {
    async getAllCategories(req: Request, res: Response) {
        try {
          const categories = await CategoryService.getAllCategories();
          res.json(categories);
        } catch (error) {
          res.status(500).json({ error: 'Internal server error' });
        }
      },
      async createCategory(req: Request, res: Response): Promise<Response> {
        try {
          const { name } = req.body;
    
        // Create a new product instance
        const productData = {
          name,  };
    
        // Create the product
        const createdProduct = await CategoryService.createCategory(productData);
      return res.status(201).json(createdProduct);
        } catch (error) {
          return res.status(500).json({ error: 'Failed to v create product' });
        }
      },
    

};

export default CategoryController;