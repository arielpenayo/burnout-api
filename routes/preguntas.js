import { Router } from 'express';
import { findAll,findById} from '../controllers/preguntas.js';
const preguntasRouter = Router();

 
preguntasRouter.get('/preguntas', (req, res, next) => {
    findAll(req, res)
});
preguntasRouter.get('/preguntas/:id', (req, res, next) => {
    findById(req, res)
});
export default preguntasRouter;