import { ObjectId } from "mongodb";
import { getDb } from "../config/mongodb.js";

function roundCollection(){
    return getDb().collection("round");
};