"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = __importDefault(require("./controllers"));
const multer_1 = __importDefault(require("multer"));
const router = express_1.default.Router();
const storage = multer_1.default.diskStorage({
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
const upload = (0, multer_1.default)({ storage });
router.get('/', controllers_1.default.getAllProducts);
router.post('/create', upload.single('imageurl'), (req, res) => {
    // Log the data received from the client to the console
    console.log(req.body);
    // Continue with the rest of your logic
    controllers_1.default.createProduct(req, res);
});
exports.default = router;
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
