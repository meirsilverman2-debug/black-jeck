import { ObjectId, ReturnDocument } from "mongodb";
import { getDb } from "../config/mongodb.js";

function roundCollection(){
    return getDb().collection("round");
};

export async function createRound(round){
    const result = await roundCollection().insertOne(round);
     return {
        ...round,
        _id: result.insertedId
    };
};


export async function getRound(id){
    const result = await roundCollection.findOne({ _id: new ObjectId(id)});
};

export async function getRoundsByPlayerId(playerId){
    const result = await roundCollection.find({playerId: playerId}).toArray();
};


export async function updateRound(id, newData){
    const result = await roundCollection.findOneAndUpdate(
        {_id: new ObjectId(id)},
        {$set: data},
        {ReturnDocument: "after"}
    );
};