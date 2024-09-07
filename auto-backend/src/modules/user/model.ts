import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/database';
class User extends Model {
  public id!: number;
  public fullName!: string;
  public email!: string;
  public password!: string;
  // other user properties

  // Define associations, class methods, instance methods, etc.
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
    schema: 'autoepcrepair',
    
  }
);

export default User;