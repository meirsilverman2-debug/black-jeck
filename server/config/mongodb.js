import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI || "mongodb://localhost:27017")
const db = client.db("black-jeck");


try {
    await client.connect();
    console.log("The system is succesfuly connected to mongodb how wonderful");
} catch (error) {
    console.log(error);
};


export function getDb(){
    return db;
};