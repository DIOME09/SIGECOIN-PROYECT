import { Router } from 'express';
import { getmetododepagos, createmetododepagos, updatemetododepago, getmetododepago, deletemetododepago } from "../controllers/metododepago.controllers.js";

const router = Router()

router.get('/metododepago',getmetododepagos)

router.get('/metododepago/:id_pago',getmetododepago)

router.post('/metododepago',createmetododepagos)

router.patch('/metododepago/:id_pago',updatemetododepago)


router.delete('/metododepago/:id_pago',deletemetododepago)


export default router