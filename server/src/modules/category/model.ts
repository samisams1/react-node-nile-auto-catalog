
import { Model, DataTypes, HasManyGetAssociationsMixin } from 'sequelize';
import Subcategory from '../subCategory/model';
import sequelize from '../../config/database';

class Category extends Model {
  public id!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public getSubcategories!: HasManyGetAssociationsMixin<Subcategory>; 

}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Category',
    tableName: 'categories',
    timestamps: true,
    schema: 'autoepcrepair',
    
  }
);
Category.hasMany(Subcategory, {
    as: 'subcategories',
    foreignKey: 'categoryId', // Replace with the actual column name in your Subcategory model
  });
export default Category;