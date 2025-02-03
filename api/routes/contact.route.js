import express from "express"
import { createContact, getContacts, updateContactStatus } from './contactController'

const router = express.Router();

router.post('/contacts', createContact);
router.get('/contacts', getContacts);
router.patch('/contacts/:id/status', updateContactStatus)

