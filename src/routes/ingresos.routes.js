import { Router } from 'express';
import { getIngresos, createIngresos, updateIngreso, getIngreso, deleteIngreso } from "../controllers/ingresos.controllers.js";

const router = Router()

router.get('/ingresos',getIngresos)

router.get('/ingresos/:id_ingresos',getIngreso)

router.post('/ingresos',createIngresos)

router.patch('/ingresos/:id_ingresos',updateIngreso)

router.delete('/ingresos/:id_ingresos',deleteIngreso)


export default router