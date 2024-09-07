import { Router } from "express";
import { login, logout } from "./authController";
import express from 'express';
const router: Router = express.Router();

router.post('/login', login);
router.post('/logout', logout);

export default router;

