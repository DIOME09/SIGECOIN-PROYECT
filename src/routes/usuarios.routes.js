import { Router } from 'express';
import { getUsuarios, createUsuarios, updateUsuario, getUsuario, deleteUsuario } from "../controllers/usuarios.controllers.js";

const router = Router()

router.get('/usuarios',getUsuarios)

router.get('/usuarios/:id_admins',getUsuario)

router.post('/usuarios',createUsuarios)

router.patch('/usuarios/:id_usuarios',updateUsuario)

router.delete('/usuarios/:id_usuarios',deleteUsuario)


export default router