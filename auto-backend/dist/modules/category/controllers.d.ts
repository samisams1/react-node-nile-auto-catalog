import { Request, Response } from 'express';
declare const CategoryController: {
    getAllCategories(req: Request, res: Response): Promise<void>;
    createCategory(req: Request, res: Response): Promise<Response>;
};
export default CategoryController;
