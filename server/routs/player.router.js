import express from "express";
import {
    createPlayer
} from "../controllers/player.controller.js"

const router = express.Router();

router.post("/start-game", createPlayer);


export default router;