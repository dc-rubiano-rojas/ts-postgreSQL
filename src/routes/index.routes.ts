import { Router } from 'express';
const router = Router();

// Controladores
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/index.controllers';

router.get('/users', getUsers);
router.get('/user/:id', getUserById);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;