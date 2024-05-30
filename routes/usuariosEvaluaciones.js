import { Router } from 'express';
import { findAll,findById,findAllByFilter } from '../controllers/usuariosEvaluaciones.js';
const usuariosEvaluacionesRouter = Router();

 
usuariosEvaluacionesRouter.get('/usuarios-evaluaciones', (req, res, next) => {
    findAll(req, res)
});
usuariosEvaluacionesRouter.get('/usuarios-evaluaciones/:id', (req, res, next) => {
    findById(req, res)
});
usuariosEvaluacionesRouter.post('/usuarios-evaluaciones-filter', (req, res, next) => {
    findAllByFilter(req, res)
});
export default usuariosEvaluacionesRouter;