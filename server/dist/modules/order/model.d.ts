import { Model } from 'sequelize';
declare class Order extends Model {
    id: number;
    productId: number;
    quantity: number;
    price: number;
    status: string;
}
export default Order;
