import { Model, DataTypes, BelongsToSetAssociationMixin } from 'sequelize';
import Subcategory from '../subCategory/model';
import sequelize from '../../config/database';

class Product extends Model {
  public id!: number;
  public name!: string;
  public subcategoryId!: number;
  public type!: string;
  public language!: string;
  public region!: string;
  public date!: string;
  public price!: number;
  public description!: string;
  public imageurl!: string;
  public zipFile!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Other model methods and associations go here
  public setCategory!: BelongsToSetAssociationMixin<Subcategory, number>;

}

Product.init(
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
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageurl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zipFile: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subcategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: true,
    schema: 'autoepcrepair',
  }
);

// Define the association between Product and Subcategory
//Product.belongsTo(Subcategory, { foreignKey: 'subcategoryId', as: 'subcategory' });

export default Product;