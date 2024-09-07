import express from 'express';
import CategoryController from './controllers';
import SubCategoryController from '../subCategory/controllers';


const router = express.Router();

router.get('/', CategoryController.getAllCategories);
//router.get('/:id', CategoryController.getCategryById);
router.get('/:name', SubCategoryController.getSubCategryIdByName);
router.post('/create', SubCategoryController.createSubCategory);

export default router;