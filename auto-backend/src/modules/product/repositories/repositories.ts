import Product from '../model';

const ProductRepository = {
  async getAllProducts(): Promise<Product[]> {
    return Product.findAll();
  },
  async create(productData: Partial<Product>): Promise<Product> {
    
    return Product.create(productData);
  }

};

export default ProductRepository;