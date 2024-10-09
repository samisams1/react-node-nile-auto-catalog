import Product from './model';
declare const ProductService: {
    getAllProducts(): Promise<Product[]>;
    createProduct(productData: Partial<Product>): Promise<Product>;
};
export default ProductService;
