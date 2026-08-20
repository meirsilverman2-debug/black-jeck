import { createPlayerService } from "../services/round.service.js";

export async function createPlayer(req, res, next){
    try {
        const player = await createPlayerService(req.body);
        res.status(201).json(player);
    } catch (error) {
        next(error);
    }
}
