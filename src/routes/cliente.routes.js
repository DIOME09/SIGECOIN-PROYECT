import { Router } from 'express';
import { getClientes, createClientes, updateCliente, getCliente, deleteCliente } from "../controllers/clientes.controllers.js";

const router = Router()

router.get('/clientes',getClientes)

router.get('/clientes/:id_clientes',getCliente)

router.post('/clientes',createClientes)

router.patch('/clientes/:id_clientes',updateCliente)

router.delete('/clientes/:id_clientes',deleteCliente)


export default router