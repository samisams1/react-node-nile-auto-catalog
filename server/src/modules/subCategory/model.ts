import { Model, DataTypes, BelongsToSetAssociationMixin } from 'sequelize';
import Category from '../category/model';
import Product from '../product/model';
import sequelize from '../../config/database';

class Subcategory extends Model {
  public id!: number;
  public name!: string;
  public categoryId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public setCategory!: BelongsToSetAssociationMixin<Category, number>;

  // Other model methods and associations go here
}

Subcategory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Subcategory',
    tableName: 'subcategories',
    timestamps: true,
    schema: 'autoepcrepair',
  }
);

// Define the association between Subcategory and Product
Subcategory.hasMany(Product, {
  as: 'products',
  foreignKey: 'subcategoryId', // Replace with the actual column name in your Subcategory model
});
export default Subcategory;