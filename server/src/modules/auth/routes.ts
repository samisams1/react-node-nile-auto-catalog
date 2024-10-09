import { Router } from "express";
import { login, logout,currentUser } from "./authController";
import express from 'express';
const router: Router = express.Router();

router.post('/login', login);
router.post('/logout', logout);
router.get('/current_user', currentUser); // New endpoint

export default router;

