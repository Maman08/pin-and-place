import express from 'express';
import {
  getAddresses,
  getAddressById,
  createAddress,
  updateAddress,
  deleteAddress
} from '../controllers/addressController.js';
import { autheticateUser } from '../middleware/auth.js';

const router = express.Router();

router.use(autheticateUser);

router.get('/addresses', getAddresses);
router.get('/addresses/:id', getAddressById);
router.post('/addresses', createAddress);
router.put('/addresses/:id', updateAddress);
router.delete('/addresses/:id', deleteAddress);

export default router;