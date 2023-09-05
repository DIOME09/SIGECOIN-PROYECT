import { Router } from 'express';
import { getproductos, createproductos, updateproducto, getproducto, deleteproducto } from "../controllers/productos.controllers.js";

const router = Router()

router.get('/productos',getproductos)

router.get('/productos/:id_productos',getproducto)

router.post('/productos',createproductos)

router.patch('/productos/:id_productos',updateproducto)

router.delete('/productos/:id_productos',deleteproducto)


export default router