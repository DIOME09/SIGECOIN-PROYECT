import { Router } from 'express';
import { getmetododepagos, createmetododepagos, updatemetododepago, getmetododepago, deletemetododepago } from "../controllers/metododepago.controllers.js";

const router = Router()

router.get('/factura',getmetododepagos)

router.get('/factura/:id_factura',getmetododepago)

router.post('/factura',createmetododepagos)

router.patch('/factura/:id_factura',updatemetododepago)


router.delete('/factura/:id_factura',deletemetododepago)


export default router