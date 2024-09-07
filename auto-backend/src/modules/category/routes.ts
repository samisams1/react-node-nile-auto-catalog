import express from 'express';
import CategoryController from './controllers';

const router = express.Router();

router.get('/', CategoryController.getAllCategories);
router.post('/createCategory', CategoryController.createCategory);

export default router;