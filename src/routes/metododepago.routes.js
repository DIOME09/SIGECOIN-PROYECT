import { Router } from 'express';
import { getmetododepago, createmetododepago, updatemetododepago, getmetododepago, deletemetododepago } from "../controllers/metodopago.controllers.js";

const router = Router()

router.get('/factura',getmetododepago)

router.post('/factura',createmetododepago)

router.patch('/factura/:id_factura',updatemetododepago)

router.get('/factura',getmetododepago)

router.delete('/factura/:id_factura',deletemetododepago)


export default router