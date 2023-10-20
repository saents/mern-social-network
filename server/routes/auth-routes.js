import express from 'express';
import {register, login} from '../controllers/auth-controller.js';
import multer from "multer";
import {verifyToken} from "../middleware/auth-middleware.js";

const router = express.Router();

router.post('/login', verifyToken, login);

export default router;