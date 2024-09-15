import express from 'express';
import ProductController from './controllers';
import multer from 'multer';

const router = express.Router();
// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/uploads'); // Ensure this directory exists
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use the original file name
  },
});

const upload = multer({ storage });

router.get('/', ProductController.getAllProducts);

router.post('/create', upload.fields([{ name: 'imageurl' }, { name: 'zipFile' }]), (req, res) => {
  ProductController.createProduct(req, res);
});
// Route to get products by subcategory ID
router.get('/subcategory/:subcategoryId', ProductController.getProductBySubcategoryId);
router.get('/product/:id', ProductController.productById);
export default router;
/*import express from 'express';
import ProductController from './controllers';
import multer from 'multer';

const router = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      // Specify the destination folder for storing the uploaded files
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      // Generate a unique filename for the uploaded file
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      const fileExtension = file.originalname.split('.').pop();
      const filename = `${uniqueSuffix}.${fileExtension}`;
      cb(null, filename);
    },
  });
  
  // Create a multer instance with the configured storage
  const upload = multer({ storage });
router.get('/', ProductController.getAllProducts);
router.post('/create', upload.single('imageurl'), ProductController.createProduct);

//router.post('/products', upload.single('image'), ProductController.createProduct);


export default router;*/