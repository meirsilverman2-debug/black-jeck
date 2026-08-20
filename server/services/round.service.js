import { ObjectId } from "mongodb";
import {
    createPlayer
} from "../dal/player.dal.supabase.js";


function createError(message){
    const error = new Error(message);
    error.status = status;
    return error;
};

export async function createPlayerService(){
    return createPlayer();
};