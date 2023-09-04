import { Router } from 'express';
import { getroles, createroles, updateroles, getroles, deleteroles } from "../controllers/roles.controllers.js";

const router = Router()

router.get('/roles',getroles)

router.get('/roles/:roles',getroles)

router.post('/roles',createroles)

router.patch('/roles/:roles',updateroles)

router.delete('/roles/:roles',deleteroles)


export default router
