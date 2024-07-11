import { Router } from 'express';
import * as contactsController from '../controllers/contactsController';
import { authenticateToken } from '../utils/authorization';

const router = Router();

router.post(
    "/contacts",
    authenticateToken(),
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
    contactsController.updateContact,
);

export default router;

