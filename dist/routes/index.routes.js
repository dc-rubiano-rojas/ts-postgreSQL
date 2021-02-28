"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
// Controladores
const index_controllers_1 = require("../controllers/index.controllers");
router.get('/users', index_controllers_1.getUsers);
router.get('/user/:id', index_controllers_1.getUserById);
router.post('/user', index_controllers_1.createUser);
router.put('/user/:id', index_controllers_1.updateUser);
router.delete('/user/:id', index_controllers_1.deleteUser);
exports.default = router;
