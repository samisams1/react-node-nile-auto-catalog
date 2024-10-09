import { Model } from 'sequelize';
declare class User extends Model {
    id: number;
    fullName: string;
    email: string;
    password: string;
}
export default User;
