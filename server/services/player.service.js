import { ObjectId } from "mongodb";
import {
    createPlayer,
    getPlayer
} from "../dal/player.dal.supabase.js";


function createError(message){
    const error = new Error(message);
    error.status = status;
    return error;
};

export async function createPlayerService(){
    return  await createPlayer();
};


export async function getPlayerService(id){
    return await getPlayer(id);
};