
import  Product  from './model';
import ProductRepository from './repositories/repositories';

const ProductService = {
  async getAllProducts(): Promise<Product[]> {
    return ProductRepository.getAllProducts();
  },
  async productById(id: string): Promise<Product | null> {
    return ProductRepository.productById(id);
  },
  async createProduct(productData: Partial<Product>): Promise<Product> {
    return ProductRepository.create(productData);
  },
  async getProductBySubcategoryId(subcategoryId: string): Promise<Product[]> {
    return ProductRepository.getBySubcategoryId(subcategoryId);
  }
};

export default ProductService;

/*

import  Product  from './model';
import ProductRepository from './repositories/repositories';

const ProductService = {
  async getAllProducts(): Promise<Product[]> {
    return ProductRepository.getAllProducts();
  },
  async findProductByName(name: string): Promise<Product | null> {
    return await ProductRepository.findOneByName(name);
  },

  async findProductByImage(imageFile: string): Promise<Product | null> {
    return await ProductRepository.findOneByImage(imageFile);
  },

  async findProductByZip(zipFile: string): Promise<Product | null> {
    return await ProductRepository.findOneByZip(zipFile);
  },
  async createProduct(productData: Partial<Product>): Promise<Product> {
    return ProductRepository.create(productData);
  },
  
};

export default ProductService;

*/