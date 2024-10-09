
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('nilesoft_autoepcrepair', 'postgres', 'samisams', {
  host: 'localhost',
  dialect: 'postgres',
  schema: 'autoepcrepair', 
});

export default sequelize; 