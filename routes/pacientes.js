import { Router } from 'express';
import { findAll,findById,findAllByFilter } from '../controllers/pacientes.js';
const pacientesRouter = Router();

 
pacientesRouter.get('/paciente', (req, res, next) => {
    findAll(req, res)
});
pacientesRouter.get('/paciente/:id', (req, res, next) => {
    findById(req, res)
});
pacientesRouter.post('/paciente-filter', (req, res, next) => {
    findAllByFilter(req, res)
});
export default pacientesRouter;