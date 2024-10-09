import { Model, HasManyGetAssociationsMixin } from 'sequelize';
import Subcategory from '../subCategory/model';
declare class Category extends Model {
    id: number;
    name: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    getSubcategories: HasManyGetAssociationsMixin<Subcategory>;
}
export default Category;
