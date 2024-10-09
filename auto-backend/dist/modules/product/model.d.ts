import { Model, BelongsToSetAssociationMixin } from 'sequelize';
import Subcategory from '../subCategory/model';
declare class Product extends Model {
    id: number;
    name: string;
    subcategoryId: number;
    type: string;
    language: string;
    region: string;
    date: string;
    price: number;
    description: string;
    imageurl: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    setCategory: BelongsToSetAssociationMixin<Subcategory, number>;
}
export default Product;
