import { Router } from 'express';
import {update, findAll,findById } from '../controllers/cuestionarios.js';
const cuestionariosRouter = Router();

cuestionariosRouter.put('/cuestionarios/:id', (req, res, next) => {
    update(req, res)
}); 
cuestionariosRouter.get('/cuestionarios', (req, res, next) => {
    findAll(req, res)
});
cuestionariosRouter.get('/cuestionarios/:id', (req, res, next) => {
    findById(req, res)
});
export default cuestionariosRouter;