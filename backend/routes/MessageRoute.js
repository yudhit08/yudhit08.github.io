import express from "express";
import {
    getMessages, 
    getMessageById,
    createMessage,
    updateMessage,
    deleteMessage
} from "../controllers/MessageController.js";

const router = express.Router();

router.get('/message', getMessages);
router.get('/message/:id', getMessageById);
router.post('/message', createMessage);
router.patch('/message/:id', updateMessage);
router.delete('/message/:id', deleteMessage);

export default router;