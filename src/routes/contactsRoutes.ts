import { Router } from 'express';
import * as contactsController from '../controllers/contactsController';
import { authenticateToken } from '../utils/authorization';
import { upload } from '../utils/uploadImage';

const router = Router();

router.post(
    "/contacts",
    authenticateToken(),
    upload.single("file"),
    contactsController.createContact,
);

router.get(
    "/contacts",
    authenticateToken(),
    contactsController.getContacts,
);

router.put(
    "/contacts/:id",
    authenticateToken(),
    upload.single("file"),
    contactsController.updateContact,
);

export default router;

