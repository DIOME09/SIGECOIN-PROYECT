import { Router } from 'express';
import { getProveedores, createProveedores, updateProveedor, getProveedor, deleteProveedor } from "../controllers/proveedores.controllers.js";

const router = Router()

router.get('/proveedores',getProveedores)

router.get('/proveedores/:id_proveedores',getProveedor)

router.post('/proveedores',createProveedores)

router.patch('/proveedores/:id_proveedores',updateProveedor)

router.delete('/proveedores/:id_proveedores',deleteProveedor)


export default router