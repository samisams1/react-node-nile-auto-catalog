import Product from '../model';
declare const ProductRepository: {
    getAllProducts(): Promise<Product[]>;
    create(productData: Partial<Product>): Promise<Product>;
};
export default ProductRepository;
