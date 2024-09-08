import express from 'express';
import { currentUserController, loginController, registerController } from '../controllers/auth.controller.js';
import AuthMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/current-user',AuthMiddleware, currentUserController);

export default router;