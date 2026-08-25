import { ObjectId } from "mongodb";
import {createRound, getRound, updateRound} from "../dal/round.dal.js";

function createError(message){
    const error = new Error(message);
    error.status = status;
    return error;
};





export async function createRoundService(bet, playerid, playerCards, dealerCards){
    const startRound = {
        playerid: playerid,
        bet: bet,
        playerCards: playerCards,
        dealerCards: dealerCards,
        status: "in_progress",
        createdAt: new Date()
    };
    const round = await createRound(startRound);
    return round;
};