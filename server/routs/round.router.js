import express from "express";
import {createRoundCtrl} from "../controllers/round.controller.js"


const router = express.Router();

router.post("/start-round", createRoundCtrl);

router.post("/hit", (req, res) => {
    res.json({});
});

router.post("/stand", (req, res) => {
    res.json({});
});

export default router;