import { Router } from 'express';
import * as contactsController from '../controllers/contactsController';

const router = Router();

router.post(
    "/contacts",
    contactsController.createContact,
);

router.get(
    "/contacts",
    contactsController.getContacts,
);

router.put(
    "/contacts/:id",
    contactsController.updateContact,
);

export default router;

