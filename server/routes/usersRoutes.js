import express from "express";

import { createUser, getUser, getUserId, updateUser } from "../controllers/usersControler.js";

const router = express.Router();

router.get('/', getUser);
router.get('/:userId', getUserId);

router.put('/:userId', updateUser);
router.post('/', createUser);

export default router;