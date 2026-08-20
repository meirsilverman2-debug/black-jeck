import { ObjectId } from "mongodb";
import { getDb } from "../config/mongodb.js";

function playerCollection(){
    return getDb().collection("player");
};