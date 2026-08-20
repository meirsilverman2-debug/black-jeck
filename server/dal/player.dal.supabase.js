import client from "../config/supabase.js";


export async function createPlayer(){
    try {
        const {data, error} = await client.from("player").insert({}).select().single();
        if (error) throw error;
        return data
    } catch (error) {
        console.log(error);  
        throw error;
    };
};


