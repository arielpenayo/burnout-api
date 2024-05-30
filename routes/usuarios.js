import { Router } from 'express';
import { findAll,findById,create } from '../controllers/usuarios.js';
const usuariosRoutes = Router();

 
usuariosRoutes.get('/usuarios', (req, res, next) => {
    findAll(req, res)
});
usuariosRoutes.get('/usuarios/:id', (req, res, next) => {
    findById(req, res)
});
usuariosRoutes.post('/usuarios', (req, res, next) => {
    create(req, res)
});
export default usuariosRoutes;