import { Router } from 'express';
import { findAll,findById,findAllByFilter } from '../controllers/cuestionarioExt.js';
const cuestionariosExtRouter = Router();

 
cuestionariosExtRouter.get('/cuestionario-ext', (req, res, next) => {
    findAll(req, res)
});
cuestionariosExtRouter.get('/cuestionario-ext/:id', (req, res, next) => {
    findById(req, res)
});
cuestionariosExtRouter.post('/cuestionario-ext-filter', (req, res, next) => {
    findAllByFilter(req, res)
});
export default cuestionariosExtRouter;