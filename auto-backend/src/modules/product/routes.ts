import express from 'express';
import ProductController from './controllers';
import multer from 'multer';
import path from 'path';

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

router.post('/create', upload.single('imageurl'), (req, res) => {
  // Log the data received from the client to the console
  console.log(req.body);

  // Continue with the rest of your logic
  ProductController.createProduct(req, res);
});

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