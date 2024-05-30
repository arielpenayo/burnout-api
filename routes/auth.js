import { Router } from 'express';
import { login } from '../controllers/auth.js';

const authRouter = Router();

authRouter.post('/login', (req, res, next) => {
    login(req, res)
}); 

export default authRouter;