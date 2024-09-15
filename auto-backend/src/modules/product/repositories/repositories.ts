import Product from '../model';

const ProductRepository = {
  async getAllProducts(): Promise<Product[]> {
    return Product.findAll();
  },

  async create(productData: Partial<Product>): Promise<Product> {
    return Product.create(productData);
  },
 /* async productById(id: string): Promise<Product[]> {
    return Product.findAll({
      where: { id } // Fetch products by subcategory ID
    }); // Adjust according to your ORM or database query method
  },*/

  async getBySubcategoryId(subcategoryId: string): Promise<Product[]> {
    return Product.findAll({
      where: { subcategoryId } // Fetch products by subcategory ID
    }); // Adjust according to your ORM or database query method
  },
  async productById(id: string): Promise<Product | null> {
    return Product.findOne({ where: { id } });
},
  // Method to find a product by name
  async findOneByName(name: string): Promise<Product | null> {
    return Product.findOne({ where: { name } });
  },

  // Method to find a product by image URL
  async findOneByImage(imageurl: string): Promise<Product | null> {
    return Product.findOne({ where: { imageurl } });
  },

  // Method to find a product by zip file
  async findOneByZip(zipFile: string): Promise<Product | null> {
    return Product.findOne({ where: { zipFile } });
  },
};

export default ProductRepository;