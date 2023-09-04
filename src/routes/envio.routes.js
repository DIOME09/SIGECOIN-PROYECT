import { Router } from 'express';
import { getenvios, createenvios, updateenvio, getenvio, deleteenvio } from "../controllers/envio.controllers.js";

const router = Router()

router.get('/envio',getenvios)

router.get('/envio/:id_envio',getenvio)

router.post('/envio',createenvios)

router.patch('/envio/:id_envio',updateenvio)

router.delete('/envio/:id_envio',deleteenvio)


export default router