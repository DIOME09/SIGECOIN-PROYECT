import { Router } from 'express';
import { getCategorias, createCategorias, updateCategoria, getCategoria, deleteCategoria } from "../controllers/categorias.controllers.js";

const router = Router()

router.get('/categorias',getCategorias)

router.get('/categorias/:id_categorias',getCategoria)

router.post('/categorias',createCategorias)

router.patch('/categorias/:id_categorias',updateCategoria)

router.delete('/categorias/:id_categorias',deleteCategoria)


export default router