import { Request, Response } from 'express';
declare const ProductController: {
    getAllProducts(req: Request, res: Response): Promise<void>;
    createProduct(req: Request, res: Response): Promise<Response>;
};
export default ProductController;
