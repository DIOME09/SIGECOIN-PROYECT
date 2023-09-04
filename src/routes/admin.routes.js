import { Router } from 'express';
import { getadmin, createadmin, updateadmin, getadmin, deleteadmin } from "../controllers/admin.controllers.js";

const router = Router()

router.get('/admin',getadmin)

router.get('/admin/:id_admin',getadmin)

router.post('/admin',createadmin)

router.patch('/admin/:id_admin',updateadmin)

router.delete('/admin/:id_admin',deleteadmin)


export default router