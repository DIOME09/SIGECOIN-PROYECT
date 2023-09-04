import { Router } from 'express';
import { getcliente, createcliente, updatecliente, getcliente, deletecliente } from "../controllers/cliente.controllers.js";

const router = Router()

router.get('/cliente',getcliente)

router.get('/cliente/:id_cliente',getcliente)

router.post('/cliente',createcliente)

router.patch('/cliente/:id_cliente',updatecliente)

router.delete('/cliente/:id_cliente',deletecliente)


export default router