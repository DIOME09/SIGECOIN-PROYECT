import { Router } from 'express';
import { getEntradas, createEntradas, updateEntrada, getEntrada, deleteEntrada } from "../controllers/entradas.controllers.js";

const router = Router()

router.get('/entradas',getEntradas)

router.get('/entradas/:id_entradas',getEntrada)

router.post('/entradas',createEntradas)

router.patch('/entradas/:id_entradas',updateEntrada)

router.delete('/entradas/:id_entradas',deleteEntrada)


export default router