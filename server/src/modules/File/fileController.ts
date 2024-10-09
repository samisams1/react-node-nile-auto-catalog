// src/controllers/fileController.ts
import { Request, Response } from 'express';
import multer from 'multer';
import path from 'path'; // Import the 'path' module
import File from './models';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const uploadFile = async (req: Request, res: Response) => {
    try {
      // Ensure req.file is defined
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }
  
      const { originalname, path: filePath } = req.file;
      const price = req.body.price;
  
      const newFile = await File.create({
        name: originalname,
        path: filePath,
        price: price,
      });
  
      res.status(201).json({ message: 'File uploaded successfully', file: newFile });
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).json({ message: 'Error uploading file' });
    }
  };

const downloadFile = (req: Request, res: Response) => {
  const file = path.join(__dirname, '../../uploads', req.params.filename);
  res.download(file, (err) => {
    if (err) {
      console.error('File download error:', err);
      res.status(404).send('File not found');
    }
  });
};

const getFiles = async (req: Request, res: Response) => {
  try {
    const files = await File.findAll();
    res.json(files);
  } catch (error) {
    console.error('Error fetching files:', error);
    res.status(500).json({ message: 'Error fetching files' });
  }
};

export { upload, uploadFile, downloadFile, getFiles };