import { Request, Response } from 'express';
import ProductService from './services';


const ProductController = {
  async getAllProducts(req: Request, res: Response) {
    try {
      const products = await ProductService.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  async productById(req: Request, res: Response) {
    const { id } = req.params; // Get id from request parameters
    try {
        const product = await ProductService.productById(id);
        
        // Check if the product is null
        if (!product) {
            return res.status(404).json({ message: 'No product found with this ID' });
        }

        return res.json(product); // Return the found product
    } catch (error) {
        console.error(error); // Log the error message to the console
        return res.status(500).json({ error: 'Internal server error' });
    }
},
  async createProduct(req: Request, res: Response): Promise<Response> {
    try {
      const files = req.files as { [fieldname: string]: Express.Multer.File[] };
      const { body } = req;
  
      // Access the uploaded files
      const imageFile = files['imageurl'] ? files['imageurl'][0] : null;
      const zipFile = files['zipFile'] ? files['zipFile'][0] : null;
  
      if (!imageFile || !zipFile) {
        return res.status(400).json({ message: "Both image and zip file must be uploaded" });
      }
  
      // Destructure fields from request body
      const { name, subcategoryId, type, language, region, date, price, description } = body;
  
      const productData = {
        name,
        subcategoryId,
        type,
        language,
        region,
        date,
        price,
        description,
        imageurl: imageFile.originalname, // Use original name for the image
        zipFile: zipFile.originalname,     // Use original name for the zip file
      };
  
      console.log(productData);
  
      // Create the product
      const createdProduct = await ProductService.createProduct(productData);
      return res.status(201).json(createdProduct);
    } catch (error) {
      console.error(error); // Log the error message to the console
      return res.status(500).json({ error: 'Failed to create product' });
    }
  },
  async getProductBySubcategoryId(req: Request, res: Response) {
    const { subcategoryId } = req.params; // Get subcategoryId from request parameters
    try {
      const products = await ProductService.getProductBySubcategoryId(subcategoryId);
      if (!products || products.length === 0) {
        return res.status(404).json({ message: 'No products found for this subcategory' });
      }
      return res.json(products);
    } catch (error) {
      console.error(error); // Log the error message to the console
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
};

export default ProductController;