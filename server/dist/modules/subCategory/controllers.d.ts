import { Request, Response } from 'express';
declare const CategoryController: {
    getAllCategories(req: Request, res: Response): Promise<void>;
    getSubCategryIdByName(req: Request, res: Response): Promise<void>;
    createSubCategory(req: Request, res: Response): Promise<Response>;
};
export default CategoryController;
