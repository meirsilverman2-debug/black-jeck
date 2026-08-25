import { createPlayerService, getPlayerService} from "../services/player.service.js";

export async function createPlayer(req, res, next){
    try {
        const player = await createPlayerService();
        res.status(201).json(player);
    } catch (error) {
        next(error);
    }
}

export async function getPlayer(req, res, next){
    try {
        const {id} = req.params
        const player = await getPlayerService(id);
        res.status(200).json(player.id)
    } catch (error) {
        next(error);
    };
};