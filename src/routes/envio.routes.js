import { Router } from 'express';
import { getenvio, createenvio, updateenvio, getenvio, deleteenvio } from "../controllers/envio.controllers.js";

const router = Router()

router.get('/envio',getenvio)

router.get('/envio/:id_envio',getenvio)

router.post('/envio',createenvio)

router.patch('/envio/:id_envio',updateenvio)

router.delete('/envio/:id_envio',deleteenvio)


export default router