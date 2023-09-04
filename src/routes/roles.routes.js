import { Router } from 'express';
import { getRoles, createRoles, updateRole, getRole, deleteRole } from "../controllers/roles.controllers.js";

const router = Router()

router.get('/roles',getRoles)

router.get('/roles/:roles',getRole)

router.post('/roles',createRoles)

router.patch('/roles/:roles',updateRole)

router.delete('/roles/:roles',deleteRole)


export default router
