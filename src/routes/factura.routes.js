import { Router } from 'express';
import { getFacturas, createFacturas, updateFactura, getFactura, deleteFactura } from "../controllers/Facturas.controllers.js";

const router = Router()

router.get('/facturas',getFacturas)

router.get('/facturas/:id_facturas',getFactura)

router.post('/facturas',createFacturas)

router.patch('/facturas/:id_facturas',updateFactura)

router.delete('/facturas/:id_facturas',deleteFactura)


export default router