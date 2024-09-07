
import  Product  from './model';
import ProductRepository from './repositories/repositories';

const ProductService = {
  async getAllProducts(): Promise<Product[]> {
    return ProductRepository.getAllProducts();
  },
  async createProduct(productData: Partial<Product>): Promise<Product> {
    return ProductRepository.create(productData);
  },
  
};

export default ProductService;

