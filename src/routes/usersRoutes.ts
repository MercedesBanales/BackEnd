import { Router } from 'express';
import * as usersController from '../controllers/usersController';
import { authenticateToken } from '../utils/authorization';

const router = Router();

router.get(
    "/users",
    authenticateToken(),
    usersController.getLoggedUser,
);

export default router;