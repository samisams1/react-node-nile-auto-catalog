import { Router } from 'express';
import express from 'express';

import { upload, uploadFile, downloadFile, getFiles } from './fileController';
import { createPaymentSession } from './paymentController';

const router = express.Router();

router.post('/upload', upload.single('file'), uploadFile);
router.get('/download/:filename', downloadFile);
router.get('/files', getFiles);
router.post('/pay', createPaymentSession);

export default router;
