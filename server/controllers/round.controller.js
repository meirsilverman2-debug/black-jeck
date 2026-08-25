import {createRoundService} from "../services/round.service.js";


// utils for the creation of the starting round:
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const suits = ["hearts", "diamonds", "clbs", "spades"];

function getACard(){
    const rank = ranks[Math.floor(Math.random() * ranks.length)]; 
    const suit = suits[Math.floor(Math.random() * suits.length)];
    return {rank: rank, suit: suit};
};

function createCards(){
    const cardA = getACard();
    const cardB = getACard();
    return [cardA, cardB];
};

const playerCards = createCards();
const dealerCards = createCards();

console.log(playerCards, dealerCards);


export async function createRoundCtrl(req, res, next){
    try {
    const playerId = req.header("playerId");
    const {bet} = req.body;

    console.log(playerId, bet);
    

        const round = await createRoundService(bet, playerId, playerCards, dealerCards);
        res.status(201).json(round)
    } catch (error) {
        next (error);
        
    };
};