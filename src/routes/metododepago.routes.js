import { Router } from 'express';
import { getmetododepago, createmetododepago, updatemetododepago, getmetododepago, deletemetododepago } from "../controllers/metododepago.controllers.js";

const router = Router()

router.get('/metododepago',getmetododepago)

router.get('/metododepago/:id_metododepago',getmetododepago)

router.post('/metododepago',createmetododepago)

router.patch('/metododepago/:id_metododepago',updatemetododepago)

router.delete('/metododepago/:id_metododepago',deletemetododepago)


export default router