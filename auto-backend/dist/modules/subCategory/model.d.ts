import { Model, BelongsToSetAssociationMixin } from 'sequelize';
import Category from '../category/model';
declare class Subcategory extends Model {
    id: number;
    name: string;
    categoryId: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    setCategory: BelongsToSetAssociationMixin<Category, number>;
}
export default Subcategory;
