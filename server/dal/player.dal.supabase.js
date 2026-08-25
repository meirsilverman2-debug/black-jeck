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


export async function getPlayer(id){
    try {
        const {data, error} = await client.from("player").select("*").eq("id", Number(id)).single();
        if (error) throw error;
        return data
    } catch (error) {
        console.log(error);
        throw error;
    };
};