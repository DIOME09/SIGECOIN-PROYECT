import { Router } from 'express';
import { getfactura, createFactura, updateFactura, getFactura, deleteFactura } from "../controllers/factura.controllers.js";

const router = Router()

router.get('/factura',getFactura)

router.get('/factura/:id_factura',getFactura)

router.post('/factura',createFactura)

router.patch('/factura/:id_factura',updateFactura)

router.delete('/factura/:id_factura',deleteFactura)


export default router