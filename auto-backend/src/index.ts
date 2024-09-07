import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Import the cors package

import userRoutes from './modules/user/routes';
import authoRoutes from './modules/auth/routes';
import categoryRoutes from './modules/category/routes';
import subCategoryRoutes from './modules/subCategory/routes';
import ProductRoutes from './modules/product/routes';
import OrderRoutes from './modules/order/routes';
import FileRoutes from './modules/File/routes';
dotenv.config();

const app = express();
app.use(express.json());

// Enable CORS middleware
app.use(cors());
app.use(express.static('uploads'))
// Register routes
app.use('/users', userRoutes);
app.use('/auth', authoRoutes);
app.use('/category', categoryRoutes);
app.use('/subCategory', subCategoryRoutes);
app.use('/product', ProductRoutes);
app.use('/orders', OrderRoutes);
app.use('/file',FileRoutes)
app.use((err: any, req: Request, res: Response, next: any) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(4000, () => {
  console.log('Server started on port 4000');
});