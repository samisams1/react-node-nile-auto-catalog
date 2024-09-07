import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';

class Order extends Model {
  public id!: number;
  public productId!: number;
  public quantity!: number;
  public price!: number;
  public status!: string;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    timestamps: true,
    schema: 'autoepcrepair',
    
  }
);

export default Order;