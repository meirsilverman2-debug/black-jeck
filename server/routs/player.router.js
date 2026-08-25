import express from "express";
import {
    createPlayer,
    getPlayer
} from "../controllers/player.controller.js"

const router = express.Router();

router.post("/start-game", createPlayer);

router.get("/:id", getPlayer);


export default router;