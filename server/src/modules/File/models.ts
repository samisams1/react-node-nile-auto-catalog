// src/models/fileModel.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';
class File extends Model {}

File.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Available', // Set default value here
      },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'File',
    timestamps: true, // Automatically manage createdAt and updatedAt
    tableName: 'files',
    schema: 'autoepcrepair',
  }
);

export default File;