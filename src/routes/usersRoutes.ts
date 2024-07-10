import { Router } from 'express';
import * as usersController from '../controllers/usersController';

const router = Router();

router.get(
    "/users",
    usersController.getUser,
);

export default router;