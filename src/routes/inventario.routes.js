import { Router } from 'express';
import { getinventarios, createinventarios, updateinventario, getinventario, deleteinventario } from "../controllers/inventario.controllers.js";

const router = Router()

router.get('/inventario',getinventarios)

router.get('/inventario/:id_inventario',getinventario)

router.post('/inventario',createinventarios)

router.patch('/inventario/:id_inventario',updateinventario)

router.delete('/inventario/:id_inventario',deleteinventario)


export default router