import { Router } from 'express';
import * as authenticationController from '../controllers/authenticationController';
import multer from 'multer';

const router = Router();
const upload = multer();

router.post(
    "/login",
    upload.none(),
    authenticationController.login,
);

export default router;