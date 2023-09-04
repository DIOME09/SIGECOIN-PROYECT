import { Router } from 'express';
import { getAdmins, createAdmins, updateAdmin, getAdmin, deleteAdmin } from "../controllers/admins.controllers.js";

const router = Router()

router.get('/admins',getAdmins)

router.get('/admins/:id_admins',getAdmin)

router.post('/admins',createAdmins)

router.patch('/admins/:id_admins',updateAdmin)

router.delete('/admins/:id_admins',deleteAdmin)


export default router